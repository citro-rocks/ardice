import React from "react";
// CSS
import styles from "./Podcast.module.css";

const Podcast = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h3>Meer weten?</h3>
                    <h2>Probeer onze podcast!</h2>
                </div>
                <div className={styles.linkbox}>
                    <div className={styles.links}>
                        <li className={styles.spotify}><a href="http://"></a></li>
                        <li className={styles.youtube}><a href="http://"></a></li>
                    </div>
                </div>
                <div className={styles.clicktoview}>
                    <li>
                        <a href="">Klik hier om het te bekijken!</a>
                    </li>
                </div>
            </div>
        </div>
    )
};

export default Podcast;