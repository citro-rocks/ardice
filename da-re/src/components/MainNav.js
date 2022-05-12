import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
// CSS
import styles from "./MainNav.module.css";

// Assests
import logo from "../assets/logo.png"

// Components
import ContactButton from "../UX/ContactButton";

// Pages
import Home from "../Pages/Home";
import Arna from "../Pages/Arna";
import Nieuws from "../Pages/Nieuws";
import Team from "../Pages/Team";
import VrBieb from '../Pages/VrBieb';
import DesignLabs from '../Pages/DesignLabs';
import Ardice from '../Pages/Ardice';

const MainNav = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar expand="lg">
                <Container className={styles.navbar}>
                    <Navbar.Brand className={styles.logo}>
                        <div className={styles.logo}>
                            <Link to="/home">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className={styles.links}>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Diensten" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/arna">Arna</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/vrbieb">VR Bieb</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/designlabs">Design Labs</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ardice">Ardice</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/nieuves">Nieuws</Nav.Link>
                        <Nav.Link as={Link} to="/team">Team</Nav.Link>
                        </Nav>
                        <div className={styles.button}>
                            <ContactButton />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <Routes>
                <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="arna" element={<Arna />} />
                    <Route path="vrbieb" element={<VrBieb />} />
                    <Route path="designlabs" element={<DesignLabs />} />
                    <Route path="ardice" element={<Ardice />} />
                    <Route path="nieuves" element={<Nieuws />} />
                    <Route path="team" element={<Team />} />
                </Routes>
        </BrowserRouter>
        </div>
    );
};

export default MainNav;