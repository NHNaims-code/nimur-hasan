import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const ContactMe = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default ContactMe;