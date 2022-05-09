import React from 'react'

// CSS
import styles from "./Inovators.module.css";

const Inovators = () => {
  return (
    <div>
        <header className={styles.header}>
            <div  className={styles.imagebox}>
                <img src={headerimg} alt="" />
            </div>
            <div className={styles.textbox}>
                <h2>De innovators van DA-RE</h2>
                <p>Wij geven DA-RE graag een gezicht en stellen ons aan u voor.</p>
                    {/* <div>
                            <ContactButton />
                        </div> */}    
            </div>
        </header>
        <div className={styles.subtitle}>
            <h2>OVER DA-RE</h2>
            <p>Bij DA-RE Health Innovation willen we nieuwe ideeën werkelijkheid laten worden. 
                We zijn een tikkeltje warrig en puilen uit van creativiteit.</p>
            <p>We denken alleen in mogelijkheden en we willen iedereen motiveren om anders te denken. Wij worden nou écht blij van situaties waarin we onszelf kunnen uitdagen om nieuwe oplossingen te ontwikkelen. We make it happen. Doen is het nieuwe denken.</p>
            <p>Wij durven dat gewoon. Do you?</p>
        </div>
    </div>
  )
}

export default Inovators
