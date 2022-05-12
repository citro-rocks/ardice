import React from "react";
import { BrowserRouter, Link } from 'react-router-dom'
import styles from "./Footer.module.css";

// // Pages
// import Home from "../Pages/Home";
// import Arna from "../Pages/Arna";
// import Nieuws from "../Pages/Nieuws";
// import Team from "../Pages/Team";
// import Contact from "../Pages/Contact";

// Assets 
import facebook from "../assets/facebook_icon.png";
import twitter from "../assets/twitter_icon.png";
import instagram from "../assets/instagram_icon.png";
import linkedin from "../assets/linkedin_icon.png";


const Footer = () => {
    // const footerItems = {
    //     logo: "./assets/logo.png",
    //     description: "DA-RE biedt de steeds complexere zorgwereld innovatieve oplossingen op maat; oplossingen die écht impact maken. Wij zijn er voor en door zorgverleners.",
    //     links: {
    //         facebook: "https://www.facebook.com/darehealthinnovation/",
    //         twitter: "https://twitter.com/darehealthinno1",
    //         instagram: "https://www.instagram.com/dare_healthinnovation/?utm_medium=copy_link",
    //         linkedin: "https://www.linkedin.com/company/da-re-health-innovation/"
    //     }
    // }
    // const footerItemsList = footerItems.map((item) => {
    //     return item.links;
    // });
    // console.log(footerItemsList);
   
     return (
        <div>
            <div className={styles.footer}>
                <BrowserRouter>
                    <div className={styles.row}>
                        <div className={styles.col_one}>
                            <div className={styles.footerlogo}>
                                <h1>DARE</h1>
                                <p>HEALTH INNOVATION</p>
                            </div>
                            <div className={styles.description}>
                                <p>DA-RE biedt de steeds complexere zorgwereld innovatieve oplossingen op maat; oplossingen die écht impact maken.
                                Wij zijn er voor en door zorgverleners.</p>
                            </div>
                            <div className={styles.social}>
                                <li><a href=""><img src={facebook} alt="" /></a></li>
                                <li><a href=""><img src={twitter} alt="" /></a></li>
                                <li><a href=""><img src={instagram} alt="" /></a></li>
                                <li><a href=""><img src={linkedin} alt="" /></a></li>
                            </div>
                        </div>
                        <div className={styles.col_two}>
                            <div className={styles.col}>
                                <Link to="/home" className={styles.mainlink}>Home</Link>
                                <li>Onze Diensten</li>
                                <li>Nieuws</li>
                                <li>Team</li>
                            </div>
                            <div className={styles.col}>
                                <Link to="/diensten" className={styles.mainlink}>Diensten</Link>
                                <li>Arna</li>
                                <li>VR Bieb</li>
                                <li>Design Labs</li>
                                <li>Ardice</li>
                            </div>
                            <div className={styles.col}>
                                <Link to="/nieuves" className={styles.mainlink}>Nieuws</Link>
                                <li>Nieuws 01</li>
                                <li>Nieuws 02</li>
                            </div>
                            <div className={styles.col}>
                                <Link to="/team" className={styles.mainlink}>Team</Link>
                                <li>The Team</li>
                            </div>
                            <div className={styles.col}>
                                <Link to="/contact" className={styles.mainlink}>Contact</Link>
                                <p>+31 (0)85 401 04 05</p>
                                <p>info@darehealthinnovation.nl</p>
                                <p>Voor de pers</p>
                            </div>
                        </div>
                    </div>
                    {/* <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/diensten" element={<Diensten />} />
                        <Route path="/nieuves" element={<Nieuws />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes> */}
                </BrowserRouter>
                <div className={styles.copyright}>
                    <p>© 2022 DA-RE Health Innovation | Privacybeleid |</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;