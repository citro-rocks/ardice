import React from "react";
import styles from "./Home.module.css";
import headerimg from "../assets/home-header-img.jpg";
import OnzeDinsten from "../components/OnzeDiensten";
import ContactButton from "../UX/ContactButton";


const Home = (props) => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.headerbg}><span></span></div>
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
        </div>
    );
}

export default Home