import React, { useRef } from 'react';
import yogaImg from '../../../assets/images/man.png';
// import vido from '../../../assets/videos/Warehouse Flood - Unbelieveable dirty carpet cleaning satisfying ASMR.mp4';
// import vidox from '../../../assets/videos/Neomorphic Forms Bangla _ Neomorphism Form Bangla _ UI Form Design Bangla 2021.mp4';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"
// import custom css
import './VideoCarousel.css';

const VideoCarousel = () => {

    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);

    // const videos = [
    //     {
    //         _id: 1,
    //         video: "https://www.youtube.com/embed/ax8Xql0VmX8?autoplay=1&loop=1&color=white&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=ax8Xql0VmX8"
    //     },
    //     {
    //         _id: 2,
    //         video: "https://www.youtube.com/embed/ax8Xql0VmX8?autoplay=1&loop=1&color=white&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=ax8Xql0VmX8"
    //     },
    //     {
    //         _id: 3,
    //         video: "https://www.youtube.com/embed/ax8Xql0VmX8?autoplay=1&loop=1&color=white&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=ax8Xql0VmX8"
    //     },
    //     {
    //         _id: 4,
    //         video: "https://www.youtube.com/embed/ax8Xql0VmX8?autoplay=1&loop=1&color=white&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=ax8Xql0VmX8"
    //     },
    //     {
    //         _id: 5,
    //         video: "https://www.youtube.com/embed/ax8Xql0VmX8?autoplay=1&loop=1&color=white&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=ax8Xql0VmX8"
    //     },
    //     {
    //         _id: 6,
    //         video: "https://www.youtube.com/embed/ax8Xql0VmX8?autoplay=1&loop=1&color=white&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=ax8Xql0VmX8"
    //     }
    // ]
    const videos = [
        {
            _id: 1,
            video: vido
        },
        {
            _id: 2,
            video: vido
        },
        {
            _id: 3,
            video: vido
        },
        {
            _id: 4,
            video: vido
        },
        {
            _id: 5,
            video: vido
        },
        {
            _id: 6,
            video: vido
        }
    ]

    return (

        <section className="primary-video-section">

            <div class="container mx-auto flex flex-wrap items-center">
                <div class="lg:w-[42%] md:w-1/2 rounded-3xl flex flex-col md:mr-auto w-full mt-10 md:mt-0">
                    <img className='w-full rounded-lg' src={yogaImg} alt="" />
                </div>


                <div class="lg:w-[50%] w md:w-1/2 md:pr-16 lg:pr-0  pr-0">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: swiperNavPrevRef.current,
                            nextEl: swiperNavNextRef.current,
                        }}


                        onSwiper={(swiper) => {
                            // Delay execution for the refs to be defined
                            setTimeout(() => {
                                // Override prevEl & nextEl now that refs are defined
                                swiper.params.navigation.prevEl = swiperNavPrevRef.current
                                swiper.params.navigation.nextEl = swiperNavNextRef.current
                                // Re-init navigation
                                swiper.navigation.destroy()
                                swiper.navigation.init()
                                swiper.navigation.update()
                            })
                        }}
                        effect={'fade'}
                        speed={800}
                        slidesPerView={1}
                        loop
                        className="mySwiper"



                    // slidesPerView={1}
                    // spaceBetween={30}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    // loop={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // navigation={true}


                    >


                        {/* <SwiperSlide className='swiper-slide'>
                            <video className='w-full h-[380px] rounded-3xl object-cover' controlsList="nodownload" autoplay controls>
                                <source src={vido} type="video/mp4" />
                            </video>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <video className='w-full h-[380px] rounded-3xl object-cover' controlsList="nodownload" autoplay controls>
                                <source src={vidox} type="video/mp4" />
                            </video>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'>
                            <video className='w-full h-[380px] rounded-3xl object-cover' controlsList="nodownload" autoplay controls>
                                <source src={vido} type="video/mp4" />
                            </video>
                        </SwiperSlide> */}

                        <div className='swiper-nav-prev' ref={swiperNavPrevRef}>
                        </div>
                        <div className='swiper-nav-next' ref={swiperNavNextRef}>
                        </div>
                    </Swiper>
                </div>

            </div>
        </section>


        // <section class="text-gray-600 body-font mt-10">
        //     <div className='video-carousel-wrapper'>
        //         {/* <div className='container mx-auto flex px-5'>
        //             <span className='text-2xl lg:pl-0 pl-6 font-thin text-black'>Schedule</span>
        //         </div> */}
        //         <div class="container mx-auto flex pr-5 md:flex-row flex-col items-center justify-between">

        //             <div class="md:w-1/2 lg:px-0 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        //                 <img className='pb-12 w-11/12 rounded-lg' src={yogaImg} alt="" />
        //             </div>

        //             <div class="lg:flex-grow lg:max-w-[35rem] lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        //                 <div className='flex justify-between pb-5'>
        //                     {/* <span className='text-black text-2xl font-thin'>Day 1- Class</span> */}
        //                     {/* <div className='flex pr-[.6px]'>
        //                         <button><img className='w-4 mr-6' src={videoPreviousBtn} alt="" /></button>
        //                         <button><img className='w-4' src={videoNextBtn} alt="" /></button>
        //                     </div> */}
        //                 </div>
        //                 <div className='relative'>

        //                     <Swiper
        //                         modules={[Navigation]}
        //                         navigation={{
        //                             prevEl: swiperNavPrevRef.current,
        //                             prevEl: swiperNavNextRef.current
        //                         }}


        //                         slidesPerView={1}
        //                         spaceBetween={30}
        //                         autoplay={{
        //                             delay: 2500,
        //                             disableOnInteraction: false,
        //                         }}
        //                         loop={true}
        //                         pagination={{
        //                             clickable: true,
        //                         }}
        //                         // navigation={true}

        //                         className="mySwiper"
        //                     >


        //                         <SwiperSlide>

        //                             <video className='w-full h-[400px] rounded-3xl object-cover' controlsList="nodownload" autoplay controls>
        //                                 <source src={vido} type="video/mp4" />

        //                             </video>
        //                             {/* <div class="youtube-container">
        //                                         <iframe src="https://www.youtube.com/embed/ax8Xql0VmX8?autoplay=1&loop=1&color=white&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=ax8Xql0VmX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //                                     </div> */}
        //                         </SwiperSlide>

        //                         <div className='swiper-nav-prev' ref={swiperNavPrevRef}>
        //                         </div>
        //                         <div className='swiper-nav-next' ref={swiperNavNextRef}>
        //                         </div>
        //                     </Swiper>


        //                     <div className='absolute right-0 top-1/2 flex bg-white py-4 px-6 items-center week-btn'>
        //                         <span className='text-black pr-4'>Week 1</span>
        //                         <button><img className='h-4 w-4' src={weekBtn} alt="" /></button>
        //                     </div>
        //                 </div>
        //                 <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        //                 <button className='mt-3 join-today-btn'>Join Today</button>
        //             </div>

        //         </div>

        //     </div>
        // </section>
    );
};

export default VideoCarousel;