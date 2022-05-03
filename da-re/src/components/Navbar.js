import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// CSS
import styles from "./Navbar.module.css";

// Assests
import logo from "../assets/logo.png"

// Components
import ContactButton from "../UX/ContactButton";


// Pages
import Home from "../Pages/Home";
import Diensten from "../Pages/Diensten";
import Nieuws from "../Pages/Nieuws";
import Team from "../Pages/Team";
import Contact from "../Pages/Contact";

const Navbar = () => {
    return (
        <BrowserRouter>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <ul className={styles.links}>
                    <Link to="/">Home</Link>
                    <Link to="/diensten">Diensten</Link>
                    <Link to="/nieuves">Nieuws</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
                <div className={styles.button}>
                    <ContactButton />
                </div>
                <div className={styles.dropdown}>
                    <div class={styles.burger}>
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="diensten" element={<Diensten />} />
                <Route path="nieuves" element={<Nieuws />} />
                <Route path="team" element={<Team />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navbar;