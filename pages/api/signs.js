// import path from 'path';
import {loadDB} from '../../src/firebase';
// import getConfig from 'next/config';
// const { serverRuntimeConfig } = getConfig();
//
// const cache = require('node-file-cache').create(
//     {file: path.join(serverRuntimeConfig.PROJECT_ROOT, './tmp/test.txt')}
// );

// const options = {
//     life: 70
// };


export default async (req, res) => {

    const db = await loadDB();
    let daily = [], weekly = [], monthly = [], yearly = [];
    const dquery = await db.firestore().collection('daily').get();
    dquery.forEach(doc => {
        daily.push(doc.data())
    });
    // const wquery = await db.firestore().collection('weekly').get();
    // wquery.forEach(doc => {
    //     weekly.push(doc.data())
    // });
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
        yearly: yearly
    };

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=12000');
    res.status(200).json(rs);

}


