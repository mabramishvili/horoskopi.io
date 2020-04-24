import {loadDB} from '../../src/firebase';

const puppeteer = require('puppeteer');
const URL_DAILY = 'https://www.funtime.ge/yoveldghiuri-horoskopi';


export default async (req, res) => {
    const browser = await puppeteer.launch();
    const db = await loadDB();
    let zodiacs = {today: {}, yesterday: {}, dayBeforeYesterday: {}};

    const getDataPage = async (page) => {
        return await page.evaluate(() => {
            let post = document.querySelector('.post-text');
            const signs = post.querySelectorAll('p');
            let data = [];
            for (let p of signs) {
                data.push(p.innerText);
            }
            return data;
        });
    };

    const fillKey = (key, data) => {
        zodiacs[key]['aries'] = data[1];
        zodiacs[key]['taurus'] = data[3];
        zodiacs[key]['gemini'] = data[5];
        zodiacs[key]['cancer'] = data[7];
        zodiacs[key]['leo'] = data[9];
        zodiacs[key]['virgo'] = data[11];
        zodiacs[key]['libra'] = data[13];
        zodiacs[key]['scorpio'] = data[15];
        zodiacs[key]['saggitarius'] = data[17];
        zodiacs[key]['capricorn'] = data[19];
        zodiacs[key]['aquarius'] = data[21];
        zodiacs[key]['pisces'] = data[23];
    };


    try {


        const page = await browser.newPage();
        await page.goto(URL_DAILY);

        const links = await page.evaluate(() => {
            let link = document.querySelectorAll('div.title>a'),
                todayLink = link[0].href.trim(), yesterdayLink = link[1].href.trim(),
                dayBeforeYesterdayLink = link[2].href.trim();
            return {today: todayLink, yesterday: yesterdayLink, dayBeforeYesterday: dayBeforeYesterdayLink};
        });


        const pageToday = await browser.newPage();
        await pageToday.goto(links.today);
        const pageYesterday = await browser.newPage();
        await pageYesterday.goto(links.yesterday);
        const pageBeforeYesterday = await browser.newPage();
        await pageBeforeYesterday.goto(links.dayBeforeYesterday);

        const dataToday = await getDataPage(pageToday);
        fillKey('today', dataToday);
        const dataYesterday = await getDataPage(pageYesterday);
        fillKey('yesterday', dataYesterday);
        const dataBeforeYesterday = await getDataPage(pageBeforeYesterday);
        fillKey('dayBeforeYesterday', dataBeforeYesterday);

        await db.firestore().collection("daily").doc("46JeXjrrJim2coqCXSzw").set(zodiacs['today']);
        await db.firestore().collection("daily").doc("MvKbdo9MQ3gLTtpiR5oK").set(zodiacs['yesterday']);
        await db.firestore().collection("daily").doc("S2xPzG3F54SzhT5Jabty").set(zodiacs['dayBeforeYesterday']);

        let rs = {
            data: zodiacs
        };

        await browser.close();
        //res.setHeader('Cache-Control', 's-maxage=1500, stale-while-revalidate=3000');
        res.status(200).json(rs);

    } catch (e) {
        console.log(e);
        res.status(500);
    } finally {
        await browser.close();
    }


}


