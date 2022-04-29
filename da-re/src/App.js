import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styles from './App.module.css';
import logo from './assets/logo.png';

// Components
import ContactForm from './components/ContactForm';
import ContactButton from './UX/ContactButton';
import Footer from './components/Footer';

// Pages
import Home from "./Pages/Home";
import Diensten from "./Pages/Diensten";
import Nieuws from "./Pages/Nieuws";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.links}>
              <Link to="/">Home</Link>
              <Link to="/diensten">Diensten</Link>
              <Link to="/nieuves">Nieuws</Link>
              <Link to="/team">Team</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <ContactButton />
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
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
