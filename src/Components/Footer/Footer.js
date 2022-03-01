import React, { Fragment } from "react";
import "../../Pages/Home/Home.css";
import { IoIosArrowDown } from "react-icons/io";
import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => (
    <Fragment>
        <footer id="main--footer">
            <div id="userProfFooter" className="userProfile--footer auth--footer--container desktop-only">
                            <ul className="auth--footer--ul flex-row">
                                    <li><Link to="/about">ABOUT</Link></li>
                                    <li>HELP</li>
                                    <li>PRIVACY</li>
                                    <li>TERMS</li>
                                    <li>LANGUAGE</li>
                                </ul>
                                <div className="auth--copyright flex-column">
                                    <div className="auth--copyright--inner mt-2 flex-row">
                                        
                                        <span> Made with <BsHeartFill /> by Ecotizens</span>
                                    </div>
                                 
                                </div>
            </div>    
        </footer>
       
    </Fragment>
)

export default Footer;