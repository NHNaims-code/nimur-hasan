import React from 'react';
import Typical from 'react-typical'
import Particles from 'react-particles-js';
import me from '../../../images/me.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-root">
                <Particles 
                    className="particle"
                style={{
                    height: '100%',
                }}>

                </Particles>
               
            <div className="row h-100 d-flex align-items-center container mx-auto">
                <div className="col-md-6 text-left">
                <h4>
                
                <Typical
                    steps={['Front End Developer', 1000, 'MERN Stack Developer', 500]}
                    loop={Infinity}
                    wrapper="p"
                />
                    </h4>
                <h1>I'm Nimur Hasan</h1>
                <p><small>I’m Md Nimur Hasan, a MERN Stack Developer. I know MongoDB, express, react, node js, and
    continue deep learning on these. I love to learn more about new web technology</small></p>
                <a className="btn btn-danger mt-3" href="https://srv-store2.gofile.io/download/iGpl7a/Resume%20of%20Md%20Nimur%20Hasan.pdf">Download Resume</a>
                </div>
                <div className="col-md-6 me-root ">
                    <div className="me tex-right">
                        <img className="me-img " src={me} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;