import React from 'react';

//CSS
import styles from "./Team.module.css";

const Team = () => {
  return (
    <div className={styles.team_section}>
      <div className={styles.team_container}>
        <div className={styles.team_image}></div>
        <div className={styles.team_text}>
            <div className={styles.team_title}>
                <h3>Het Team</h3>
                <p>De innovators van DA-RE.
                Wij geven DA-RE graag een gezicht en stellen ons aan u voor.</p>
            </div>
            <div className={styles.team_link}>
                <link rel="stylesheet" href="" />ONTMOET HET TEAM
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team
