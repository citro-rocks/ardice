import React from "react";
import styles from "./Home.module.css";
import headerimg from "../assets/home-header-img.jpg";
import OnzeDinsten from "../components/OnzeDiensten";
import ContactButton from "../UX/ContactButton";
import Nieuwsfeed from "../components/Nieuwsfeed";
import Podcast from "../components/Podcast";
import Innovaties from "../components/Innovaties";
import Team from "../components/Team";


const Home = (props) => {
    return (
        <div>
            <header className={styles.header}>
                {/* <div className={styles.headerbg}><span></span></div> */}
                <div  className={styles.imagebox}>
                    <img src={headerimg} alt="" />
                </div>
                <div className={styles.textbox}>
                        <h2>Would you dare?</h2>
                        <p>Aangenaam. Wij zijn DA-RE. Als innovator in de zorgsector brengen wij de zorgwereld in beweging. Dit doen we door lef te tonen en verder te kijken dan de zorgbehoeften van vandaag. DA-RE is een ontwikkelbedrijf van zorginnovaties voor en door zorgprofessionals.</p>
                        <div>
                            <ContactButton />
                        </div>
                </div>
            </header>
            <OnzeDinsten />
            <Nieuwsfeed />
            <Podcast />
            <Innovaties />
            <Team />
        </div>
    );
}

export default Home