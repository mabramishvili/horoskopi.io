const puppeteer = require('puppeteer');
const URL_DAILY = 'https://www.funtime.ge/yoveldghiuri-horoskopi';

export default async (req, res) => {
    const browser = await puppeteer.launch();

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
        const dataToday = await pageToday.evaluate(() => {
            let post = document.querySelector('.post-text');
            let postText = post.innerText.trim();
            return postText;
        });

        let rs = {
            data: dataToday
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


