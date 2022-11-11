import React from 'react';
import Article from './Article/Article';
import Banner from './Banner/Banner';
import Faqs from './Faqs/Faqs';
import ImageComparisonSlider from './ImageComparisonSlider/ImageComparisonSlider';
import PrimaryVideo from './PrimaryVideo/PrimaryVideo';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import './Home.css';
import VideoCarousel from './VideoCarousel/VideoCarousel';
import Features from './Features/Features';

const Home = () => {
    return (
        <main>
            <Banner />
            <Services />
            <PrimaryVideo />
            <VideoCarousel />
            <ImageComparisonSlider />
            <Features />

            <Reviews />
            <Faqs />
            <Article />
        </main>
    );
};

export default Home;