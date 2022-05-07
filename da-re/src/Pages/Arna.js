import React from 'react';
// CSS
import styles from "./Arna.module.css";

// Asets
import headerimg from "../assets/arna_header_img.png";

const Arna = () => {
  const ArnaContent = {
      header: {
        main: "ARNA, je virtuele collega in de zorg",
      paragraph: "ARNA staat dag en nacht voor je klaar. In de ARNA-app vind je alle informatie over duizenden technische hulpmiddelen in de zorg."
    },

    content: {
      subtitle: "Maak kennis met ARNA",
      description: "ARNA is ontstaan vanuit de behoefte op de werkvloer. Als werkenden in de zorg merkten we op dat zorgmedewerkers ‘verstrooid’ raken in de steeds dynamischere zorgomgeving, waarbij waardevolle tijd met cliënten steeds kostbaarder wordt. We zijn daarom in gesprek gegaan met zorgmedewerkers, brachten knelpunten aan het licht en zochten naar oplossingen die beter aansluiten op het werkproces van onze zorgcollega’s.Op deze manier is ARNA ontstaan. ARNA is je virtuele assistent in de zorg, ontwikkeld door en voor zorgmedewerkers. ARNA ontzorgt en ondersteunt medewerkers in het dagelijkse werk en voorziet hen op elk moment en op elke plek van belangrijke informatie over medische hulpmiddelen.De ARNA-app zorgt voor gemak en tijdsbesparing zodat collega’s op de werkvloer kunnen blijven doen wat zij het liefste doen: bewoners en cliënten helpen.",
      video: "https://www.youtube.com/watch?v=9xk8H2osXek"
    },

    card: {
      title : "Waarom ARNA",
      content: "ARNA is schaalbaar en daarom voor iedere organisatie haalbaar! Durft u de eerste stap richting de toekomst te zetten? Dan kijken wij graag samen met jou naar de toepassing van ARNA binnen uw organisatie."
    }

  }

  return (
    <div>
      <header className={styles.header}>
                <div  className={styles.imagebox}>
                    <img src={headerimg} alt="header_img" />
                </div>
                <div className={styles.textbox}>
                        <h2>ARNA, je virtuele collega in de zorg</h2>
                        <p>ARNA staat dag en nacht voor je klaar.
                            In de ARNA-app vind je alle informatie over duizenden technische hulpmiddelen in de zorg.</p>
                        <div>
                            {/* <ContactButton /> */}
                        </div>
                </div>
            </header>
            {/* <OnzeDinsten />
            <Nieuwsfeed />
            <Podcast />
            <Innovaties />
            <Team /> */}
    </div>
  );
};

export default Arna;
