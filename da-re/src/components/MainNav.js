import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Nav } from 'react-bootstrap';
// CSS
import styles from "./MainNav.module.css";

// Assests
import logo from "../assets/logo.png"

// Components
import ContactButton from "../UX/ContactButton";

// TAKE A LOOK https://codesandbox.io/s/react-responsive-nav-3n3lu?file=/src/components/Navbar.js

// Pages
import Home from "../Pages/Home";
import Arna from "../Pages/Arna";
import Nieuws from "../Pages/Nieuws";
import Team from "../Pages/Team";

const MainNav = () => {
    return (
        <div>
            <BrowserRouter>
                <Nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <Link to="/home">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                        <ul className={styles.links}>
                            <Link to="/">Home</Link>
                            <Link to="/diensten">Diensten</Link>
                            <Link to="/nieuves">Nieuws</Link>
                            <Link to="/team">Team</Link>
                        </ul>
                    <div className={styles.button}>
                        <ContactButton />
                    </div>
                    <div className={styles.dropdown}>
                        <div class={styles.burger}></div>
                    </div>
                </Nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="diensten" element={<Arna />} />
                    <Route path="nieuves" element={<Nieuws />} />
                    <Route path="team" element={<Team />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default MainNav;