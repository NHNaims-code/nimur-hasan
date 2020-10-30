import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Project from './Project/Project';
import './Projects.css';

const Projects = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Project></Project>
            <Footer></Footer>
        </div>
    );
};

export default Projects;