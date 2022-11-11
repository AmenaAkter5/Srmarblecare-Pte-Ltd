import React from 'react';
import playStore from '../../../assets/app-logo/playstore.png';
import appStore from '../../../assets/app-logo/appstore.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className='footer-container'>
                    <h2>SR Marble Polish Private Ltd.</h2>
                    <p>Download Our Mobile App</p>
                    <div className='footer-app-container'>
                        <a href="https://www.linkedin.com/in/manikislammahi/">
                            <img className='play-store-img' src={playStore} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/manikislammahi/">
                            <img className='app-store-img' src={appStore} alt="" />
                        </a>
                    </div>
                </div>

                <div className='company-others'>
                    <div>
                        <h5 className='footer-text'>Company</h5>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Career</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Privacy Policy</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Refund Policy</a></p>

                    </div>

                    <div className='footer-others'>
                        <h5 className='footer-text'>Others</h5>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Blogs</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Crash Course</a></p>
                        <p className='footer-text'><a href="https://www.linkedin.com/in/manikislammahi/">Want to be an affiliate</a></p>
                    </div>
                </div>

                <div className='social-media'>
                    <h5 className='footer-text'>Through social media we</h5>
                    <p className='footer-text'>Contact: <span className='footer-span'>8244</span> (8AM - 11PM)</p>
                    <p className='footer-text'>SMS: SHCHelp to 440404 (24X7)</p>
                    <p className='footer-text'>Email: <span className='footer-span'>support@studyhackscorner.com</span></p>

                    <div className='social-icon-container'>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><FaFacebook className='social-icon' /></a>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><FaInstagram className='social-icon'></FaInstagram></a>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><FaTwitter className='social-icon'></FaTwitter></a>
                        <a href="https://www.linkedin.com/in/manikislammahi/"><FaYoutube className='social-icon'></FaYoutube></a>
                    </div>

                </div>

            </div>

            <div className='footer-copy-right-text'>Copyright &copy; 2022 srmarblecare.com</div>

        </footer>
    );
};

export default Footer;