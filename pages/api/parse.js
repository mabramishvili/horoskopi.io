
const puppeteer = require('puppeteer');
const URL_DAILY = 'https://www.funtime.ge/yoveldghiuri-horoskopi';

export default async (req, res) => {


    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(URL_DAILY);

        const data = await page.evaluate(()=>{
            let title = document.querySelector('div.title');
            title = title.innerText.trim();
            return title;
        });


        let rs = {
            data: data
        };

        //res.setHeader('Cache-Control', 's-maxage=1500, stale-while-revalidate=3000');
        res.status(200).json(rs);

    }catch (e) {
        console.log(e);
    }


}


