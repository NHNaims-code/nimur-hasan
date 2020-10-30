import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-root">
            <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                    <Link to="/">
                    <a class="nav-link mx-3" href="#">Home <span class="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/projects">
                    <a class="nav-link mx-3" href="#">Projects</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/about">
                    <a class="nav-link mx-3" href="#">About Me</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/blog">
                    <a class="nav-link mx-3" href="#">Blog</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact">
                    <a class="nav-link mx-3" href="#">Contact Me</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <a className="btn btn-danger" href="https://srv-store2.gofile.io/download/iGpl7a/Resume%20of%20Md%20Nimur%20Hasan.pdf">Download Resume</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;