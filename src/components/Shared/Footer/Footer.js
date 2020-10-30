import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-root">
            <div className="d-flex justify-content-center pt-3">
                <div className="bg-danger d-flex align-items-center justify-content-center m-2 icon">
                    <a href="https://github.com/NHNaims-code" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                </div>
                <div className="bg-danger d-flex align-items-center justify-content-center m-2 icon">
                    <a href="https://www.linkedin.com/in/md-nimur-hasan/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
            </div>
            <p className="pt-5 mt-5"><small>&copy; 2020. All right reserved.</small></p>
        </div>
    );
};

export default Footer;