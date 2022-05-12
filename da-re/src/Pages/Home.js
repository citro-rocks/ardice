import React from "react";
// CSS
import styles from "./Home.module.css";
// Components
import OnzeDinsten from "../components/OnzeDiensten";
import Nieuwsfeed from "../components/Nieuwsfeed";
import Podcast from "../components/Podcast";
import Innovaties from "../components/Innovaties";
import Team from "../components/Team";
import PersonCard from "../components/PersonCard";
import Header from "../components/Header";


const Home = (props) => {
    return (
        <div>
            <Header />
            <OnzeDinsten />
            <Nieuwsfeed />
            <Podcast />
            <Innovaties />
            <Team />
            <PersonCard />
        </div>
    );
}

export default Home;