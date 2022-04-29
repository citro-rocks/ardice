import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styles from './App.module.css';
import logo from './assets/logo.png';

import ContactForm from './components/ContactForm';

// Pages
import Home from "./Pages/Home";
import Diensten from "./Pages/Diensten";
import Nieuws from "./Pages/Nieuws";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <nav className={styles.header}>
            <img src={logo} alt="logo" />
            <div className={styles.links}>
              <Link to="/">Home</Link>
              <Link to="/diensten">Diensten</Link>
              <Link to="/nieuves">Nieuws</Link>
              <Link to="/team">Team</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <button className={styles.button}>
              <Link to="/contact">CONTACT</Link>
            </button>
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="diensten" element={<Diensten />} />
            <Route path="nieuves" element={<Nieuws />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
