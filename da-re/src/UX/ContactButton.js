import React from "react";
import styles from "./ContactButton.module.css";

// Need to set <Redirect>
import { Link } from 'react-router-dom';

// Routes

const ContactButton = () => {
    return (
        <div>
            <button className={styles.button}>
                <Link to="/contact">CONTACT</Link>
            </button>
        </div>
    );
};

export default ContactButton;
