import React from 'react'
// CSS
import styles from "./PersonCard.module.css";

// JSON 
// import member from "./inovators/Inovators.json";

const PersonCard = () => {

  return (
    <div>
      <div className={styles.container}>
          <div className={styles.grid}>
              <div className={styles.card}>
                  <div className={styles.person_img}>
                      <img src="" alt="" />
                      <div className={styles.person_name}>
                        <h2>Name</h2>
                        <p>Title</p>
                      </div>
                  </div>
                  <div className={styles.description}>
                      <p>Description</p>
                  </div>
                  <div className={styles.social_links}>
                      <ul>
                          <li>twitter</li>
                          <li>mail</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default PersonCard;
