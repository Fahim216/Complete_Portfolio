import React from 'react';
import About from '../Details/About/About';
import Header from "./../Header/Header";
import Skills from "./../Details/Skills/Skills";
import Projects from "./../Details/Projects/Projects";
import ContactInfo from '../Details/ContactInfo/ContactInfo';

const Home = () => {
    return (
        <div>
             <Header></Header>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;