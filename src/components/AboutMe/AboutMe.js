import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="my-5">
            <div className="row meHeader my-3 container mx-auto">
                <div className="col-md-6">
                    <h1>MD NIMUR HASAN</h1>
                    <h4>MERN Stack Developer</h4>
                </div>
                <div className="col-md-6">
                    <p><span>Phone:</span> <a href="tel:+8801784905517">+8801784905517</a></p>
                    <p><span>E-mail:</span> <a href="mailto:nimur.hasan101@gmail.com">nimur.hasan101@gmail.com</a></p>
                    <p><span>LinkedIn:</span> <a href="https://bit.ly/3kBVA0d">https://bit.ly/3kBVA0d</a></p>
                    <p><span>Address:</span> Kurigram, Rangpur, 5620</p>
                </div>
            </div>
            <p><a href="https://github.com/NHNaims-code" target="_blank">https://github.com/NHNaims-code</a></p>\
            <p className="w-50 mx-auto">I’m Md Nimur Hasan, a MERN Stack Developer. I know MongoDB, express, react, node js, and
continue deep learning on these. I love to learn more about new web technology.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutMe;