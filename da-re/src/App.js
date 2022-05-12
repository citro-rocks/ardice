import React from 'react';
import styles from './App.module.css';

// Components
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MainNav from './components/MainNav';



function App() {
  return (
    <div className={styles.App}>
      <MainNav />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
