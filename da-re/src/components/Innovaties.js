import React from "react";
import styles from "./Innovaties.module.css";

import ContactButton from "../UX/ContactButton";

const Innovaties = () => {
  return (
    <div className={styles.innovaties_section}>
      <div className={styles.container}>
        <div className={styles.text}>
            <div className={styles.quote}>
                <h3>“Als innovator in de zorgsector brengen wij de zorgwereld in beweging.”</h3>
                <p>Wilt u met ons samenwerken?
                Neem dan contact met ons op. De (digitale) koffie staat klaar!</p>
            </div>
            <ContactButton />
        </div>
        <div className={styles.image}></div>
      </div>
    </div>
  )
}

export default Innovaties
