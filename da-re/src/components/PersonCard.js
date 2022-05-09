import React from 'react'
// CSS
import styles from "./PersonCard.module.css";

import inovators from '../inovators/Inovators_db';

const PersonCard = () => {
    console.log(inovators);
    const listItems = inovators.map((item) => 
        <div className={styles.contaner} key={item.id}>
            <div className={styles.card}>
                <div className={styles.card_img}>
                    <img src={item.image} alt="" />
                </div>
                <div className={styles.person_name}>
                    <h2>{item.name}</h2>
                    <p>{item.title}</p>
                </div>
                <div className={styles.description}>
                    <p>{item.description}</p>
                </div>
                <div className={styles.social_links}>
                    <ul>
                        <li>{item.ln}</li>
                        <li>{item.mail}</li>
                    </ul>
                </div>
            </div>
        </div>
    );

  return (
    <div>
      {listItems}
    </div>
  )
}

export default PersonCard;
