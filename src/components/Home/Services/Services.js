import React from 'react';
import './Services.css';
import { GiFloorPolisher, GiVacuumCleaner } from "react-icons/gi";
import { MdCleaningServices } from 'react-icons/md';
import { GrHome } from 'react-icons/gr';
import { GiBouncingSpring } from 'react-icons/gi';
import { GiSofa } from 'react-icons/gi';
import Service from './Service';

const Services = () => {
    return (
        <section className='services'>

            <div className='services-headline'>
                <h1>How can we help you?</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.</p>
                <p>Praesent mattis commodo augue.</p>
            </div>

            <div className='service-card'>

                <Service
                    icon={<GiFloorPolisher className='icon' />}
                    title={'Floor Polishing'}
                    description={'If you do not have a full-time domestic helper handling the daily household chores in your home and you are tired of doing it  monthly.'}
                />

                <Service
                    icon={<GrHome className='icon' />}
                    title={'Home Cleaning'}
                    description={'If you do not have a full-time domestic helper handling the daily household chores in your home and you are tired of doing it  monthly.'}
                />

                <Service
                    icon={<MdCleaningServices className='icon' />}
                    title={'Outdoor Cleaning'}
                    description={'If you do not have a full-time domestic helper handling the daily household chores in your home and you are tired of doing it  monthly.'}
                />

                <Service
                    icon={<GiVacuumCleaner className='icon' />}
                    title={'Carpet Cleaning'}
                    description={'If you do not have a full-time domestic helper handling the daily household chores in your home and you are tired of doing it  monthly.'}
                />

                <Service
                    icon={<GiBouncingSpring className='icon' />}
                    title={'Spring Cleaning'}
                    description={'If you do not have a full-time domestic helper handling the daily household chores in your home and you are tired of doing it  monthly.'}
                />

                <Service
                    icon={<GiSofa className='icon' />}
                    title={'Sofa Cleaning'}
                    description={'If you do not have a full-time domestic helper handling the daily household chores in your home and you are tired of doing it  monthly.'}
                />

            </div>

        </section>
    );
};

export default Services;