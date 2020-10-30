import React from 'react';
import './Portfolio.css'
import creativeAgency from '../../../images/creative-agency.png'
import volunteer from '../../../images/voluneer-network.png'
import onlineClass from '../../../images/online-class.png'
import pinMatcher from '../../../images/pin-matcher.png'

const Portfolio = () => {

    return (
        <div className="container">
            <h2 className="mt-5 pt-5">Portfolio</h2>

            <div className="row">
                <div className="col-md-6 ">
                <div className="m-5 p-5 shadow portfolio">
                    <img className="w-100 mb-5" src={creativeAgency} alt=""/>
                    <div className=" w-100 d-flex justify-content-between">
                        <div className=" p-0 text-left">
                            <div>
                                <a className="btn btn-danger" href="https://creative-agency-c7ca7.web.app" target="_blank">Live Preview</a>
                            </div>
                        </div>
                        <div className=" text-right p-0">
                            <div>
                                <a className="btn btn-danger" href="https://creative-agency-c7ca7.web.app" target="_blank">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6 ">
                <div className="m-5 p-5 shadow portfolio">
                    <img className="w-100 mb-5" src={volunteer} alt=""/>
                    <div className=" w-100 d-flex justify-content-between">
                        <div className=" p-0 text-left">
                            <div>
                                <a className="btn btn-danger" href="https://vollunteer-network.web.app/" target="_blank">Live Preview</a>
                            </div>
                        </div>
                        <div className=" text-right p-0">
                            <div>
                                <a className="btn btn-danger" href="https://github.com/NHNaims-code/volunteer-network-client" target="_blank">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6 ">
                <div className="m-5 p-5 shadow portfolio">
                    <img className="w-100 mb-5" src={onlineClass} alt=""/>
                    <div className=" w-100 d-flex justify-content-between">
                        <div className=" p-0 text-left">
                            <div>
                                <a className="btn btn-danger" href="https://creative-agency-c7ca7.web.app" target="_blank">Live Preview</a>
                            </div>
                        </div>
                        <div className=" text-right p-0">
                            <div>
                                <a className="btn btn-danger" href="https://creative-agency-c7ca7.web.app" target="_blank">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6 ">
                <div className="m-5 p-5 shadow portfolio">
                    <img className="w-100 mb-5" src={pinMatcher} alt=""/>
                    <div className=" w-100 d-flex justify-content-between">
                        <div className=" p-0 text-left">
                            <div>
                                <a className="btn btn-danger" href="https://creative-agency-c7ca7.web.app" target="_blank">Live Preview</a>
                            </div>
                        </div>
                        <div className=" text-right p-0">
                            <div>
                                <a className="btn btn-danger" href="https://creative-agency-c7ca7.web.app" target="_blank">Source Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;