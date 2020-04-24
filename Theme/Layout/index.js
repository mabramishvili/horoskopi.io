import Head from 'next/head';
import Container from "@material-ui/core/Container";
import React from "react";
import styles from './layout.module.css';
import NavBar from "../../components/NavBar";
import Grid from "@material-ui/core/Grid";

export const Index = (props) => (
    <div>
        <Head>
            <title>დღის ჰოროსკოპი, ყოველდღიური ჰოროსკოპი</title>
            <meta name="description" content="დღის ჰოროსკოპი, ზოდიაქო, ყოველდღიური ჰოროსკოპი ყველა ზოდიაქოს ნიშნისთვის" />
            <meta property="og:title" content="დღის ჰოროსკოპი, ყოველდღიური ჰოროსკოპი" />
            <meta property="og:description" content="დღის ჰოროსკოპი, ზოდიაქო, ყოველდღიური ჰოროსკოპი ყველა ზოდიაქოს ნიშნისთვის" />
            <meta property="og:url" content="https://horoskopi.io" />
            <meta property="og:image" content="https://horoskopi.io/img/horoskopi.jpg" />
            <meta property="og:site_name" content="HOROSKOPI.IO" />
            <link rel="shortcut icon" href="/img/icons/hfavicon.png" />
            <link rel="apple-touch-icon" href="/img/icons/hfavicon.png"/>
        </Head>
        <NavBar/>
        <Container maxWidth="lg">
            <div className={styles.container}>
                {props.children}
            </div>
        </Container>
        <div className={styles.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item lg={3} sm={4} xs={6}>
                        © Horoskopi.io 2020 -
                    </Grid>
                </Grid>
            </Container>
        </div>
    </div>
);
