import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styles from "./Footer.module.css";

//Pages
// import Home from "../Pages/Home";
// import Diensten from "../Pages/Diensten";
// import Nieuws from "../Pages/Nieuws";
// import Team from "../Pages/Team";
// import Contact from "../Pages/Contact";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <BrowserRouter>
                <div className={styles.row}>
                    <div className={styles.colone}>
                        <div className={styles.footerlogo}>
                            <h1>DARE</h1>
                            <p>HEALTH INNOVATION</p>
                        </div>
                        <div className={styles.description}>
                            <p>DA-RE biedt de steeds complexere zorgwereld innovatieve oplossingen op maat; oplossingen die écht impact maken.
    Wij zijn er voor en door zorgverleners.</p>
                        </div>
                        <div className={styles.social}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <li className={styles.mainlink}><Link to="/home">Home</Link></li>
                        <li>Onze Diensten</li>
                        <li>Nieuws</li>
                        <li>Team</li>
                    </div>
                    <div className={styles.col}>
                        <li className={styles.mainlink}><Link to="/diensten">Diensten</Link></li>
                        <li>Arna</li>
                        <li>VR Bieb</li>
                        <li>Design Labs</li>
                        <li>Ardice</li>
                    </div>
                    <div className={styles.col}>
                        <li className={styles.mainlink}><Link to="/nieuves">Nieuws</Link></li>
                        <li>Nieuws 01</li>
                        <li>Nieuws 02</li>
                    </div>
                    <div className={styles.col}>
                        <li className={styles.mainlink}><Link to="/team">Team</Link></li>
                        <li>The Team</li>
                    </div>
                    <div className={styles.col}>
                        <li className={styles.mainlink}><Link to="/contact">Contact</Link></li>
                        <p>+31 (0)85 401 04 05</p>
                        <p>info@darehealthinnovation.nl</p>
                        <p>Voor de pers</p>
                    </div>
                </div> 
            </BrowserRouter>
            <div className={styles.copyright}>
                <p>© 2022 DA-RE Health Innovation | Privacybeleid |</p>
            </div>
        </div>
    );
};

export default Footer;