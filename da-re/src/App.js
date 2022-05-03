import React from 'react';
import styles from './App.module.css';

// Components
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';



function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
