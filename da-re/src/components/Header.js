import React from 'react'
//CSS 
import styles from "./Header.module.css";
// Assets
import headerimg from "../assets/home-header-img.jpg";
import ContactButton from "../UX/ContactButton";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
            <div  className={styles.imagebox}>
                    <img src={headerimg} alt="" />
                </div>
                <div className={styles.textbox}>
                    <h2>Would you dare?</h2>
                    <p>Aangenaam. Wij zijn DA-RE. Als innovator in de zorgsector brengen wij de zorgwereld in beweging. Dit doen we door lef te tonen en verder te kijken dan de zorgbehoeften van vandaag. DA-RE is een ontwikkelbedrijf van zorginnovaties voor en door zorgprofessionals.</p>
                <div>
                    <ContactButton />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
