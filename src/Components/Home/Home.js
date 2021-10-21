import React from 'react';
import About from '../Details/About/About';
import Header from "./../Header/Header";
import Skills from "./../Details/Skills/Skills";

const Home = () => {
    return (
        <div>
             <Header></Header>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;