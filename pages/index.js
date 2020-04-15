import React, {useState} from 'react';

import {Index as Layout} from "../Theme/Layout";
import Grid from '@material-ui/core/Grid';
import Zodiac from "../components/Zodiac";
import styles from './index.module.css'
import ZodiacGrid from "../components/ZodiacGridItem";
import BlockUi from 'react-block-ui';



export default function Index() {

    const [loading, setLoading] = useState(false);

    return (
        <Layout>
            {/*<h1 className={styles.title}>*/}
            {/*    ყოველდღიური ჰოროსკოპი*/}
            {/*</h1>*/}
            <BlockUi tag="div" blocking={loading}>
                <div className={styles.root}>
                    <Grid container spacing={3}>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"aries.png"} title={"ვერძი"} dates={"21 მარ-19 აპრ"} linkTo={"aries"}/>
                        </ZodiacGrid>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"taurus.png"} title={"კურო"} dates={"20 აპრ-20 მაი"} linkTo={"taurus"}/>
                        </ZodiacGrid>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"gemini.png"} title={"ტყუპები"} dates={"21 მაი-20 ივნ"} linkTo={"gemini"}/>
                        </ZodiacGrid>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"cancer.png"} title={"კირჩხიბი"} dates={"21 ივნ-22 ივლ"} linkTo={"cancer"}/>
                        </ZodiacGrid>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"leo.png"} title={"ლომი"} dates={"23 ივლ-22 აგვ"} linkTo={"leo"}/>
                        </ZodiacGrid>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"virgo.png"} title={"ქალწული"} dates={"23 აგვ-22 სექ"} linkTo={"virgo"}/>
                        </ZodiacGrid>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"libra.png"} title={"სასწორი"} dates={"23 სექ-22 ოქტ"} linkTo={"libra"}/>
                        </ZodiacGrid>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"scorpio.png"} title={"მორიელი"} dates={"23 ოქტ-21 ნოე"} linkTo={"scorpio"}/>
                        </ZodiacGrid>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"saggitarius.png"} title={"მშვილდოსანი"} dates={"22 ნოე-21 დეკ"}
                                    linkTo={"saggitarius"}/>
                        </ZodiacGrid>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"capricorn.png"} title={"თხის რქა"} dates={"22 დეკ-19 იან"}
                                    linkTo={"capricorn"}/>
                        </ZodiacGrid>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"aquarius.png"} title={"მერწყული"} dates={"20 იან-18 თებ"}
                                    linkTo={"aquarius"}/>
                        </ZodiacGrid>
                        <ZodiacGrid>
                            <Zodiac click={() => setLoading(true)} image={"pisces.png"} title={"თევზები"} dates={"19 თებ-20 მარ"} linkTo={"pisces"}/>
                        </ZodiacGrid>
                    </Grid>
                </div>
            </BlockUi>
        </Layout>
    );
}
