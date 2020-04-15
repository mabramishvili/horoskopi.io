import React from 'react';

import {Index as Layout} from "../Theme/Layout";
import Grid from '@material-ui/core/Grid';
import Zodiac from "../components/Zodiac";
import styles from './index.module.css'
import ZodiacGrid from "../components/ZodiacGridItem";

export default function Index() {
    return (
        <Layout>
            {/*<h1 className={styles.title}>*/}
            {/*    ყოველდღიური ჰოროსკოპი*/}
            {/*</h1>*/}
            <div className={styles.root}>
                <Grid container spacing={3}>
                    <ZodiacGrid>
                        <Zodiac image={"aries.png"} title={"ვერძი"} dates={"21 მარ-19 აპრ"} linkTo={"aries"}/>
                    </ZodiacGrid>
                    <ZodiacGrid>
                        <Zodiac image={"taurus.png"} title={"კურო"} dates={"20 აპრ-20 მაი"} linkTo={"taurus"}/>
                    </ZodiacGrid>
                    <ZodiacGrid>
                        <Zodiac image={"gemini.png"} title={"ტყუპები"} dates={"21 მაი-20 ივნ"} linkTo={"gemini"}/>
                    </ZodiacGrid>
                    <ZodiacGrid>
                            <Zodiac image={"cancer.png"} title={"კირჩხიბი"} dates={"21 ივნ-22 ივლ"} linkTo={"cancer"}/>
                    </ZodiacGrid>
                    <ZodiacGrid>
                        <Zodiac image={"leo.png"} title={"ლომი"} dates={"23 ივლ-22 აგვ"} linkTo={"leo"}/>
                    </ZodiacGrid>
                    <ZodiacGrid>
                        <Zodiac image={"virgo.png"} title={"ქალწული"} dates={"23 აგვ-22 სექ"} linkTo={"virgo"}/>
                    </ZodiacGrid>
                    <ZodiacGrid>
                        <Zodiac image={"libra.png"} title={"სასწორი"} dates={"23 სექ-22 ოქტ"} linkTo={"libra"}/>
                    </ZodiacGrid>
                    <ZodiacGrid>
                        <Zodiac image={"scorpio.png"} title={"მორიელი"} dates={"23 ოქტ-21 ნოე"} linkTo={"scorpio"}/>
                    </ZodiacGrid>
                    <ZodiacGrid>
                        <Zodiac image={"saggitarius.png"} title={"მშვილდოსანი"} dates={"22 ნოე-21 დეკ"} linkTo={"saggitarius"}/>
                    </ZodiacGrid>
                    <ZodiacGrid>
                        <Zodiac image={"capricorn.png"} title={"თხის რქა"} dates={"22 დეკ-19 იან"} linkTo={"capricorn"}/>
                    </ZodiacGrid>
                    <ZodiacGrid>
                        <Zodiac image={"aquarius.png"} title={"მერწყული"} dates={"20 იან-18 თებ"} linkTo={"aquarius"}/>
                    </ZodiacGrid>
                    <ZodiacGrid>
                        <Zodiac image={"pisces.png"} title={"თევზები"} dates={"19 თებ-20 მარ"} linkTo={"pisces"}/>
                    </ZodiacGrid>
                </Grid>
            </div>
        </Layout>
    );
}
