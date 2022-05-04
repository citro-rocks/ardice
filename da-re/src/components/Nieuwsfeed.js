import React from 'react'
// CSS
import styles from "./Nieuwsfeed.module.css";
// Assets
import nieuws_1 from "../assets/nieuws_1.png";
import nieuws_2 from "../assets/nieuws_2.png";
import { Link } from 'react-router-dom';

const Nieuwsfeed = () => {
  return (
    <div className={styles.nieuws_sction}>
      <div className={styles.main_title}>
        <h2>NIEUWS</h2>
      </div>
      <div className={styles.nieuws_card}>
          <div className={styles.nieuws_img}>
            <img src={nieuws_1} alt="" />
          </div>
          <div className={styles.nieuws_container}>
              <div className={styles.nieuws_date}>
                <p>1 maart 2021</p>
              </div>
              <div className={styles.nieuws_title}>
                <h3>Dit is wat wij bij DA-RE doen</h3>
              </div>
              <div className={styles.nieuws_content}>
                <p>'Wat doen jullie dan bij DA-RE?',  is een vraag die wij vaak krijgen. Wij werken momenteel aan het interactieve informatieplatform ARNA. Dit doen wij in samenwerking met medewerkers van 8 zorgorganisaties in Friesland. In de afgelopen maanden hebben wij een aantal sessies
                'Wat doen jullie dan bij DA-RE?',  is een vraag die wij vaak krijgen.</p>
              </div>
              <div className={styles.nieuws_button}>
                <li>Meer</li>
              </div>
          </div>
      </div>
      <div className={styles.nieuws_card}>
          <div className={styles.nieuws_img}>
            <img src={nieuws_2} alt="" />
          </div>
          <div className={styles.nieuws_container}>
              <div className={styles.nieuws_date}>
                <p>15 september 2020</p>
              </div>
              <div className={styles.nieuws_title}>
                <h3>Zorgsector gaat met VR-bril het virus te lijf</h3>
              </div>
              <div className={styles.nieuws_content}>
                <p>Friese zorgorganisaties proberen hun medewerkers voor te bereiden op een eventuele tweede coronagolf. Daarbij worden nieuwe technieken ingezet, zoals een virtual reality-training. ,,Kijk naar het gele stipje. Heb je dat? En selecteer daarna met je ogen een antwoord op de vraag die je wordt gesteld. Daarna gaat het vanzelf.”</p>
              </div>
              <div className={styles.nieuws_button}>
                <li>Meer</li>
              </div>
          </div>
      </div>
      <div className={styles.meer_news}>
        <li>Meer Nieus</li>
      </div>
    </div>
  )
}

export default Nieuwsfeed;
