import React from 'react';
import './Project.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from '../../../images/ca1.png'
import img2 from '../../../images/ca2.png'
import img3 from '../../../images/ca3.png'
import img4 from '../../../images/ca4.png'
import vn1 from '../../../images/voluneer-network.png'
import vn2 from '../../../images/vn2.png'
import vn3 from '../../../images/vn3.png'
import vn4 from '../../../images/vn4.png'
import vn5 from '../../../images/vn5.png'


const Project = () => {
    const caImg = [img1, img2, img3, img4];
    const vnImg = [vn1, vn2, vn3, vn4, vn5];
    const caTechnology = ['React JS', 'Node JS', 'MongoDB', 'Express', 'Firebase']
    const caLink = ['','','']
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
    <div>
        <div className="mt-5">
            <h1>Creative Agency</h1>
            <Slider {...settings}>
          {
              caImg.map(img => 
                <div>
                    <div className="slide-img-root">
                        <img className="img-fluid m-0 p-0 shadow" src={img} alt=""/>
                    </div>
                </div>
                )
          }
        </Slider>
        
          <h3 className="mt-5">Technology</h3>
            <div className="row d-flex mt-3 container mx-auto">
                
                {
                    caTechnology.map(tech=>
                        <div className="col-md-3 col-sm-2">
                            <div className="technology">
                                {tech}
                            </div>
                        </div>
                        )
                }
            </div>
            <div className="row container mx-auto">
                <div className="col-md-6 feature-root">
                    <h2 className="text-left">Features</h2>
                    <ul className="text-left">
                        <li>
                            <p>People can select any service and order us easily</p>
                        </li>
                        <li>
                            <p>All activities show in admin panel admin can change the status</p>
                        </li>
                        <li>
                            <p>User can give us feedback and it’s show in UI dynamically</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between text-right">
                    <div className="my-3">
                        <a href="https://creative-agency-c7ca7.web.app/" target="_blank" className="btn btn-danger">View Live Site</a>
                    </div>
                    <div className="my-3">
                        <a href="https://github.com/NHNaims-code/creative-agency-client" target="_blank" className="btn btn-danger">Source Code Client</a>
                    </div>
                    <div className="my-3">
                        <a href="https://github.com/NHNaims-code/creative-agency-server" className="btn btn-danger">Source Code Server</a>
                    </div>
                </div>
            </div>
          </div>



          <div className="my-5 bg-danger py-5 text-white">
            <h1>Volunteer Network</h1>
            <div className="w-100">
            <Slider {...settings} className="w-100">
            {
                vnImg.map(img => 
                    <div>
                        <div className="slide-img-root">
                            <img className="img-fluid m-0 p-0 shadow" src={img} alt=""/>
                        </div>
                    </div>
                    )
            }
            </Slider>
            </div>
        
          <h3 className="mt-5">Technology</h3>
            <div className="row d-flex mt-3 container mx-auto">
                
                {
                    caTechnology.map(tech=>
                        <div className="col-md-3 col-sm-2">
                            <div className="technology">
                                {tech}
                            </div>
                        </div>
                        )
                }
            </div>
            <div className="row container mx-auto">
                <div className="col-md-6 feature-root">
                    <h2 className="text-left">Features</h2>
                    <ul className="text-left">
                        <li>
                            <p>People can select any service and order us easily</p>
                        </li>
                        <li>
                            <p>All activities show in admin panel admin can change the status</p>
                        </li>
                        <li>
                            <p>User can give us feedback and it’s show in UI dynamically</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between text-right">
                    <div className="my-3">
                        <a href="https://vollunteer-network.web.app/" target="_blank" className="btn btn-secondary">View Live Site</a>
                    </div>
                    <div className="my-3">
                        <a href="https://github.com/NHNaims-code/volunteer-network-client" target="_blank" className="btn btn-secondary">Source Code Client</a>
                    </div>
                    <div className="my-3">
                        <button className="btn btn-secondary">Source Code Server</button>
                    </div>
                </div>
            </div>
          </div>

          <div className="my-5 pt-5">
            <h1>Volunteer Network</h1>
            <Slider {...settings}>
          {
              vnImg.map(img => 
                <div>
                    <div className="slide-img-root">
                        <img className="img-fluid m-0 p-0 shadow" src={img} alt=""/>
                    </div>
                </div>
                )
          }
        </Slider>
        
          <h3 className="mt-5">Technology</h3>
            <div className="row d-flex mt-3 container mx-auto">
                
                {
                    caTechnology.map(tech=>
                        <div className="col-md-3 col-sm-2">
                            <div className="technology">
                                {tech}
                            </div>
                        </div>
                        )
                }
            </div>
            <div className="row container mx-auto">
                <div className="col-md-6 feature-root">
                    <h2 className="text-left">Features</h2>
                    <ul className="text-left">
                        <li>
                            <p>People can select any service and order us easily</p>
                        </li>
                        <li>
                            <p>All activities show in admin panel admin can change the status</p>
                        </li>
                        <li>
                            <p>User can give us feedback and it’s show in UI dynamically</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between text-right">
                    <div className="my-3">
                        <button className="btn btn-danger">View Live Site</button>
                    </div>
                    <div className="my-3">
                        <button className="btn btn-danger">Source Code Client</button>
                    </div>
                    <div className="my-3">
                        <button className="btn btn-danger">Source Code Server</button>
                    </div>
                </div>
            </div>
          </div>
        </div>


        
    );
};

export default Project;