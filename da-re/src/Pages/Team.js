import React from "react";
import Header from "../components/Header";
import PersonCard from "../components/PersonCard";

import styles from "./Team.module.css";

const Team = (props) => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1>OVER DA-RE</h1>
                <p>Bij DA-RE Health Innovation willen we nieuwe ideeën werkelijkheid laten worden. 
                    We zijn een tikkeltje warrig en puilen uit van creativiteit</p>
                <p>We denken alleen in mogelijkheden en we willen iedereen motiveren om anders te denken. Wij worden nou écht blij van situaties   waarin we onszelf kunnen uitdagen om nieuwe oplossingen te ontwikkelen. We make it happen. Doen is het nieuwe denken. 
                    Wij durven dat gewoon. Do you?</p>
            </div>
            <PersonCard />
        </div>
    );
}

export default Team;