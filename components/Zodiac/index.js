import React from 'react';
import * as PropTypes from "prop-types";
import styles from './zodiac.module.css';
import Link from "next/link";

function Zodiac(props) {
    const content = (
        <a className={styles.zodiacContainer} href={`sign/${props.linkTo}`}>
            <div className={styles.imageContainer}>
                <img src={'/img/zodiacs/' + props.image} alt={"aries"} className={styles.image}/>
            </div>
            <div className={styles.arrowContainer}>
                <img src={'/img/icons/arrow.png'} alt={"arrow"} className={styles.arrow}/>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            {props.dates ? <p className={styles.date}>{props.dates}</p> : ""}
        </a>
    );
    const noLink = (
        <div className={styles.zodiacContainer}>
            <div className={styles.imageContainer}>
                <img src={'/img/zodiacs/' + props.image} alt={"aries"} className={styles.image}/>
            </div>
            <div className={styles.arrowContainer}>
                <img src={'/img/icons/arrow.png'} alt={"arrow"} className={styles.arrow}/>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            {props.dates ? <p className={styles.date}>{props.dates}</p> : ""}
        </div>
    );
    const link = (
        <Link href={`sign/${props.linkTo}`}>
            {content}
        </Link>
    );

    return props.linkTo?link:noLink;
}

Zodiac.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
};

export default Zodiac;
