import React from 'react';
import { AiFillStar } from "react-icons/ai";
import manik from '../../../assets/images/manik-islam-mahi-small.jpg';
import reviewerHead from '../../../assets/background/tutor-09.png';

// import from swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import custom css
import './Reviews.css';

const Reviews = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Nirob Islam Nasir',
            img: manik,
            review: 'If you do not have a full-time domestic helper handling the daily household  household chores in your home and you are tired of doing it  monthly. If you do not have a full-time domestic htime domestic helper handling the daily household chores ...'
        },
        {
            _id: 2,
            name: 'Manik Islam Mahi',
            img: manik,
            review: 'If you do not have a full-time domestic helper handling the daily household  household chores in your home and you are tired of doing it  monthly. If you do not have a full-time domestic htime domestic helper handling the daily household chores ...'
        },
        {
            _id: 3,
            name: 'Md Zahin Uddin',
            img: manik,
            review: 'If you do not have a full-time domestic helper handling the daily household  household chores in your home and you are tired of doing it  monthly. If you do not have a full-time domestic htime domestic helper handling the daily household chores ...'
        },
        {
            _id: 4,
            name: 'Monir Hossain',
            img: manik,
            review: 'If you do not have a full-time domestic helper handling the daily household  household chores in your home and you are tired of doing it  monthly. If you do not have a full-time domestic htime domestic helper handling the daily household chores ...'
        },
        {
            _id: 5,
            name: 'Yesin Arafat',
            img: manik,
            review: 'If you do not have a full-time domestic helper handling the daily household  household chores in your home and you are tired of doing it  monthly. If you do not have a full-time domestic htime domestic helper handling the daily household chores ...'
        },
        {
            _id: 6,
            name: 'Osman',
            img: manik,
            review: 'If you do not have a full-time domestic helper handling the daily household  household chores in your home and you are tired of doing it  monthly. If you do not have a full-time domestic htime domestic helper handling the daily household chores ...'
        },
        {
            _id: 7,
            name: 'Meherin',
            img: manik,
            review: 'If you do not have a full-time domestic helper handling the daily household  household chores in your home and you are tired of doing it  monthly.If you do not have a full-time domestic htime domestic helper handling the daily Manik'
        }
    ]


    return (
        <section className='review-section'>
            <div className='review-wrapper'>
                <h4>Why are they <span>ch<span>oo</span>se </span> us?</h4>
                <p>What our client say? Please hear from theirs, don't take our word for it!</p>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className='review-content'>
                                    <div>
                                        <img className='reviewer-img ' src={review.img} alt="" />
                                        <img className='reviewer-cap' src={reviewerHead} alt="" />

                                        <div className='rating-star'>
                                            {
                                                [...Array(5)].map((i, index) => <AiFillStar key={index} />)
                                            }
                                        </div>
                                        <p>{review.review.slice(0, 280)}</p>
                                        <h5>{review.name}</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section >
    );
};

export default Reviews;