const cache = require('node-file-cache').create();
import {loadDB} from '../../src/firebase';

const options = {
    life: 70
};

export default async (req, res) => {
    let cachedItem = cache.get("signs");
    if(!cachedItem){
        const db = await loadDB();
        let daily = [], weekly = [], monthly = [], yearly = [];
        const dquery = await db.firestore().collection('daily').get();
        dquery.forEach(doc => {
            daily.push(doc.data())
        });
        const wquery = await db.firestore().collection('weekly').get();
        wquery.forEach(doc => {
            weekly.push(doc.data())
        });
        const mquery = await db.firestore().collection('monthly').get();
        mquery.forEach(doc => {
            monthly.push(doc.data())
        });
        const yquery = await db.firestore().collection('yearly').get();
        yquery.forEach(doc => {
            yearly.push(doc.data())
        });
        let rs = {
            daily: daily,
            weekly: weekly,
            monthly: monthly,
            yearly: yearly,
            test: cachedItem
        };
        cache.set("signs", rs, options);
        cachedItem = rs;
    }

    res.status(200).json(cachedItem);

}
