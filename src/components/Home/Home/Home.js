import React from 'react';
import './Home.css';
import Contact from '../../Contact/Contact';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className="home-root">
            <Header></Header>
            <Hero></Hero>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;