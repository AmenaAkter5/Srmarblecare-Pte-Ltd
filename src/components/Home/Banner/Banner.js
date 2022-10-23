import React from 'react';
import msg from '../../../assets/msg/message (2).png';
import { FaArrowRight } from "react-icons/fa";
import './Banner.css';

const Banner = () => {
    return (
        <section className='hero-section'>
            <div className="hero-flex-container">
                <div className="hero-flex-item">
                    <div itemscope itemtype="https://schema.org/LocalBusiness">
                        <h1 className='hero-site-name' itemprop="name">SR Marble Care Private LTD.</h1>
                        <span className='hero-ph-no' itemprop="telephone">
                            <a href="tel:+8801682440404">Phone: +8801682440404</a>
                        </span>
                    </div>
                    <h4 className='hero-title'>Find Your Dream Home Today</h4>
                    <p className='hero-main-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laborum sint sapiente porro reiciendis numquam laudantium omnis magnam assumenda ducimus, voluptate eveniet at accusamus debitis rerum! Explicabo repellat cum itaque!</p>
                </div>
                <div className="hero-flex-item">
                    <h1 className='need-polishing'>Need Marble Polishing?</h1>
                    <p className='message-us'>Message Us</p>
                    <img src={msg} alt="" />
                    <form>
                        <input type="text" name="" id="" placeholder='Your Name' />
                        <input type="email" name="" id="" placeholder='Your Email' />
                        <textarea name="" id="hero-textarea" cols="30" rows="5" placeholder='Your Message'></textarea>

                        <div className='msg-send-btn-container'>
                            <div className='msg-send-btn-content'>
                                <input className='msg-send-btn' type="submit" value="Send Message" />
                            </div>
                            <FaArrowRight class="msg-send-btn-icon" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Banner;