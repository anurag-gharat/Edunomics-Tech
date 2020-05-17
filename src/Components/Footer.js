import React from 'react'
import Logo from '../Images/logo.png'
import {GrFacebookOption,GrTwitter,GrGooglePlus,GrLinkedinOption} from 'react-icons/gr'
import {FaWhatsapp} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="deep-purple grey darken-4 pt-30">
            <div className="row">
                <div className="col l3 s12 pl-5">
                    <div className="row">
                        <img alt="logo" src={Logo} width="80%"/>
                    </div>
                    <div className="row deep-purple-text">
                        <h6>About Us</h6>
                        <p className="white-text">
                        Edunomics provides turn-key software development services that add value to your business.
                        </p>
                    </div>
                    <div className="row ">
                        <h6 className="deep-purple-text">Contact Us</h6>
                        <p  className="white-text"><i class="material-icons left">call</i>7745050822</p>
                        <p  className="white-text"><i class="material-icons left">email</i>youremail.com</p>
                    </div>
                </div>
                <div className="col l3 s12 deep-purple-text ">
                    <h6 >Services</h6>
                    <ul className="footer-list">
                        <li><a href="http://tech.edunomics.in/custom-software" target="_blank" rel="noopener noreferrer">Custom Software Development</a></li>
                        <li><a href="http://tech.edunomics.in/dedicated-development-teams" target="_blank" rel="noopener noreferrer">Dedicated Development Teams</a></li>
                        <li><a href="http://tech.edunomics.in/legacy-software-migration" target="_blank" rel="noopener noreferrer">Legacy Software Management</a></li>
                        <li><a href="http://tech.edunomics.in/computer-vision" target="_blank" rel="noopener noreferrer">Computer Vision</a></li>
                        <li><a href="http://tech.edunomics.in/nlp" target="_blank" rel="noopener noreferrer">Natural Language Processing</a></li>
                        <li><a href="http://tech.edunomics.in/data-analytics" target="_blank" rel="noopener noreferrer">Data Analytics and Visualization</a></li>
                    </ul>
                </div>
                <div className="col l3 s12 ">
                    <h6 className="deep-purple-text">Solutions</h6>
                    <ul className="footer-list">
                        <li><a href="http://distribution.edunomics.in/" target="_blank" rel="noopener noreferrer">Distribution Management System</a></li>
                        <li><a href="http://service.edunomics.in/"  target="_blank" rel="noopener noreferrer">Service Management System</a></li>
                        <li><a href="http://procure.edunomics.in/"  target="_blank" rel="noopener noreferrer">Procurement Management System</a></li>
                        <li><a href="http://invoice.edunomics.in/"  target="_blank" rel="noopener noreferrer">Invoice Management System</a></li>
                        <li><a href="http://interactive.edunomics.in/"  target="_blank" rel="noopener noreferrer">Interactive Marketing System</a></li>
                        <li><a href="http://fleet.edunomics.in/"  target="_blank" rel="noopener noreferrer">Fleet Management System</a></li>
                    </ul>
                </div>
                <div className="col l3 s12 ">
                    <h6 className="deep-purple-text">Industry</h6>
                    <ul className="footer-list">
                        <li><a href="http://tech.edunomics.in/come" target="_blank" rel="noopener noreferrer">Education</a></li>
                        <li><a href="http://tech.edunomics.in/come" target="_blank" rel="noopener noreferrer">Retail & Wholesale</a></li>
                        <li><a href="http://tech.edunomics.in/come" target="_blank" rel="noopener noreferrer">Construction</a></li>
                        <li><a href="http://tech.edunomics.in/come" target="_blank" rel="noopener noreferrer">Transpotation</a></li>

                    </ul>
                </div>

            </div>
            <div className="row no-mar center">
                <GrFacebookOption className="display-1 footer-icons deep-purple-text lighten-1" />  
                <GrTwitter  className="display-1 footer-icons deep-purple-text" />   
                <GrGooglePlus  className="display-1 footer-icons deep-purple-text" /> 
                <GrLinkedinOption  className="display-1 footer-icons deep-purple-text" />
                <FaWhatsapp  className="display-1 footer-icons deep-purple-text"  />               
            </div>
            <div className="row no-mar center black white-text">
            All rights reserved.
            </div>
        </footer>
            
    )
}
