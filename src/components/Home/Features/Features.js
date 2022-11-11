import React from 'react';
import Feature from './Feature';
import man from '../../../assets/images/man 2.png';
// import line from '../../../assets/line.png';
import printIcon from '../../../assets/icon/Print-Icon_01.png';
import './Features.css';



const Features = () => {
    return (
        <section id="feature">

            <div className="title-text">
                <h1>Why Choose Us</h1>
                {/* <img src={line} alt="" /> */}
            </div>

            <div className="feature-box">

                <div>

                    <Feature
                        icon={printIcon}
                        title={'Certified & Top-Rated'}
                        description={'With leading certifications and more than 30 years of experience, we have earned an illustrious reputation and a repertoire of satisfied clients.'}
                    />

                    <Feature
                        icon={printIcon}
                        title={'Certified & Top-Rated'}
                        description={'With leading certifications and more than 30 years of experience, we have earned an illustrious reputation and a repertoire of satisfied clients.'}
                    />

                    <Feature
                        icon={printIcon}
                        title={'Certified & Top-Rated'}
                        description={'With leading certifications and more than 30 years of experience, we have earned an illustrious reputation and a repertoire of satisfied clients.'}
                    />

                </div>

                <div>
                    <img className='man-img' src={man} alt="" />
                </div>

                <div>

                    <Feature
                        icon={printIcon}
                        title={'Certified & Top-Rated'}
                        description={'With leading certifications and more than 30 years of experience, we have earned an illustrious reputation and a repertoire of satisfied clients.'}
                    />

                    <Feature
                        icon={printIcon}
                        title={'Certified & Top-Rated'}
                        description={'With leading certifications and more than 30 years of experience, we have earned an illustrious reputation and a repertoire of satisfied clients.'}
                    />

                    <Feature
                        icon={printIcon}
                        title={'Certified & Top-Rated'}
                        description={'With leading certifications and more than 30 years of experience, we have earned an illustrious reputation and a repertoire of satisfied clients.'}
                    />

                </div>
            </div>

        </section >
    );
};

export default Features;