import React from "react";
import styles from "./OnzeDiensten.module.css";


const OnzeDinsten = () => {
    return (
        <div className={styles.container}>
            <div className={styles.skewdbg}><span></span></div>
            <div className={styles.title}>
                <h2>ONZE DIENSTEN</h2>
                <p>Wij werpen een blik in de toekomst en gaan daarom een stap verder. DA-RE biedt de steeds complexere zorgwereld innovatieve oplossingen op maat; oplossingen die écht impact maken. Wij zijn er voor en door zorgverleners.</p>
            </div>
            <div className={styles.grid_wrapper}>
                <div className={styles.grid}>
                    <div className={styles.arna}>
                        <div>
                            <h2>Arna</h2>
                            <p>Je virtuele collega in de zorg</p>
                        </div>
                    </div>
                    <div className={styles.vr_bieb}>
                        <div>
                            <h2>VR Bieb</h2>
                            <p>Onbeperkt leren met VR</p>
                        </div>
                    </div>
                    <div className={styles.design_labs}>
                        <div>
                            <h2>Design Labs</h2>
                            <p>De pijnpunten rond een casus uit de praktijk in kaart brengen</p>
                        </div>
                    </div>        
                    <div className={styles.ardice}>
                        <div>
                            <h2>Ardice</h2>
                            <p>Dagelijkse activiteiten-app voor ouderen</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OnzeDinsten;