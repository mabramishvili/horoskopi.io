import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Index as Layout} from "../../Theme/Layout";
import {loadDB} from '../../src/firebase';
import { useRouter } from 'next/router'
import Zodiac from "../../components/Zodiac";
import IconButton from "@material-ui/core/IconButton";
import Head from "next/head";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Link from "next/link";
import useStyles from '../../css/styles/sign'
import TabPanel from "../../components/TabPanel";
import fetch from 'isomorphic-unfetch';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    const router = useRouter();
    const { sign } = router.query;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const titles = {
        aries: 'ვერძი',
        taurus: 'კურო',
        gemini: 'ტყუპები',
        cancer: 'კირჩხიბი',
        leo: 'ლომი',
        virgo: 'ქალწული',
        libra: 'სასწორი',
        scorpio: 'მორიელი',
        saggitarius: 'მშვილდოსანი',
        capricorn: 'თხის რქა',
        aquarius: 'მერწყული',
        pisces: 'თევზები'
    };

    return (
        <Layout>

            <Head>
                <title>{titles[sign]} - დღის ჰოროსკოპი</title>
                <meta name="description" content={titles[sign] + ' - დღის ჰოროსკოპი, ყოველდღიური ჰოროსკოპი' } />
            </Head>

            <Link href={"/"}>
                <a href={"/"}>
                    <IconButton
                        color="inherit"
                        aria-label="back"
                        className={classes.goBack}
                    >
                        <ArrowBackIosIcon />
                        უკან დაბრუნება
                    </IconButton>
                </a>
            </Link>

            <div className={classes.root}>

                <div style={{width: '150px', margin: '0 auto'}}>
                    <Zodiac image={`${sign}.png`} title={titles[sign]}/>
                </div>

                <AppBar position="static" className={classes.tabBar}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab className={classes.tab} label="გუშინწინ" {...a11yProps(0)} />
                        <Tab className={classes.tab} label="გუშინ" {...a11yProps(1)} />
                        <Tab className={classes.tab} label="დღეს" {...a11yProps(2)} />
                        {/*<Tab className={classes.tab} label="ამ კვირაში" {...a11yProps(3)} />*/}
                        <Tab className={classes.tab} label="ამ თვეში" {...a11yProps(3)} />
                        <Tab className={classes.year} label="2020" {...a11yProps(4)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} className={classes.tabPanel}>
                    {props.daily[2][sign]}
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.tabPanel}>
                    {props.daily[1][sign]}
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.tabPanel}>
                    {props.daily[0][sign]}
                </TabPanel>
                {/*<TabPanel value={value} index={3} className={classes.tabPanel}>*/}
                {/*    {props.weekly[0][sign]}*/}
                {/*</TabPanel>*/}
                <TabPanel value={value} index={3} className={classes.tabPanel}>
                    {props.monthly[0][sign]}
                </TabPanel>
                <TabPanel value={value} index={4} className={classes.tabPanel}>
                    {props.yearly[0][sign]}
                </TabPanel>
            </div>
        </Layout>
    );
}

export async function getServerSideProps() {
    let host = process.env.host;
    let res = await fetch(host + '/api/signs');
    res = await res.json();
    return {
        props: {
            daily: res.daily,
            weekly: res.weekly,
            monthly: res.monthly,
            yearly: res.yearly
        }
    };
}



// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { sign: 'aries' } },
//             { params: { sign: 'taurus' } },
//             { params: { sign: 'gemini' } },
//             { params: { sign: 'cancer' } },
//             { params: { sign: 'leo' } },
//             { params: { sign: 'virgo' } },
//             { params: { sign: 'libra' } },
//             { params: { sign: 'scorpio' } },
//             { params: { sign: 'saggitarius' } },
//             { params: { sign: 'capricorn' } },
//             { params: { sign: 'aquarius' } },
//             { params: { sign: 'pisces' } }
//         ],
//         fallback: false
//     };
// }

export default SimpleTabs;
