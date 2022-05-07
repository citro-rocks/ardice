import React from "react";
import styles from "./ContactForm.module.css"

const ContactForm = () => {
    return(
        <div className={styles.contact_wrapper}>
            <div className={styles.form}>
                <div className={styles.title}>
                    <h2>Contact</h2>
                    <p>Wij nemen zo spoedig mogelijk contact met u op!</p>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.toprow}>
                        <input type="text" placeholder="Naam*" />
                        <input type="text" placeholder="Email*" />
                    </div>
                    <div className={styles.midrow}>
                        <input type="text" placeholder="Telefoon*"/>
                        <input type="text" placeholder="Organisatie*"/>
                    </div>
                    <div className={styles.bottomrow}>
                        <input type="text" placeholder="Je bericht" />
                    </div>
                </div>
                <div className={styles.contact}>
                    <p>+31 (0)85 401 04 05</p>
                    <p>info@darehealthinnovation.nl</p>
                    <p>KVK: 81438621</p>
                    <div>
                        <button type="submit">VERZENDEN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;