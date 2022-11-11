import React from 'react';
import { Button } from "@material-tailwind/react";
import { ReactComponent as PrimaryDash } from '../../../assets/svg/primaryline.svg';
import './PrimaryVideo.css';

const PrimaryVideo = () => {

    return (
        <section className="primary-video-section">
            <h4 className='pl-2 text-4xl text-[#333] font-light'>How Sr Marble Care Works</h4>
            <span className='pl-2 text-[#666] text-2xl font-light block pt-2'>Make your dream home with us</span>
            <div class="container pt-4 pb-12 mx-auto flex flex-wrap items-center">
                <div class="lg:w-[50%] w md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    {/* <div class="youtube-container">
                        <iframe src="https://www.youtube.com/embed/ax8Xql0VmX8?autoplay=1&loop=1&color=white&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=ax8Xql0VmX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> */}
                </div>
                <div class="lg:w-[42%] md:w-1/2 bg-[#EEE6FC] rounded-3xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <div className='flex'>
                        <button className="px-5 small-btn flex items-center">
                            <span>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span>
                            <span className='ml-2 mt-[2px]'>Details</span>
                        </button>

                        <button className="px-5 small-btn flex items-center ml-5"><span>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span>
                            <span className='ml-2 mt-[2px]'>Technich</span></button>
                    </div>
                    <div class="relative mb-4">
                        <p className='text-[#333] my-3 text-2xl font-light'>Choose a quiet space so that you can do the session uninterrupted. Make sure there is at least 2 hours gap between a meal and the class. Put all other devices aside and enjoy the session.</p>
                    </div>
                    {/* <div class="relative mb-4">
                        <span className='aed-99'>AED 99/-</span>
                    </div> */}
                    <Button
                        style={{
                            boxShadow: "none",
                            background: "linear-gradient(335.64deg, #7546bd -19.22%, #46237a 118.87%)",
                            color: '#fff',
                            borderRadius: '50px',
                            padding: "16px 24px",
                            fontWeight: "300",
                            display: "inline-flex",
                            marginBottom: '8px',

                        }}
                    >
                        <span>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span>
                        <span className='ml-2'>Contact Us</span></Button>

                    <Button variant="outlined" style={{

                        boxShadow: "none",
                        // background: "transparent",
                        color: "rgb(121, 80, 242)",
                        borderRadius: '50px',
                        padding: "15px 24px",
                        fontWeight: "300",
                        display: "inline-flex",
                        border: "1px solid rgb(121, 80, 242)"
                    }}>
                        <span>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span>
                        <span className='ml-2'>View Schedule</span>
                    </Button>
                </div>


            </div>

            <PrimaryDash className=' absolute left-0 right-0 mx-auto bottom-[-38px]' />
        </section>

        // <section class="text-gray-600 body-font primary-video-bg">

        //     <div className="primary-video-wrapper relative">
        //         <h1 className='text-4xl text-black font-light'>Marble for Flat Abs</h1>
        //         <span className='text-2xl font-light block pt-2 pb-6'>90 Days program</span>
        //         <div class="primary-video-flex-box">
        //             <div className='relative primary-video-flex-item'>
        //                 <span className='absolute top-3 pl-3 text-white primary-video-heading'>Introduction video</span>
        //                 <div class="youtube-container">
        //                     <iframe src="https://www.youtube.com/embed/ax8Xql0VmX8?autoplay=1&loop=1&color=white&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=ax8Xql0VmX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //                 </div>
        //             </div>

        //             <div class="primary-video-flex-item">
        //                 <div className='flex'>
        //                     <div className='relative'>
        //                         <h5 className='text-[#FE5266] font-light pr-8'>Details</h5>
        //                         <div className='detail-text-underline'></div>
        //                     </div>
        //                     <h5>Techniques</h5>
        //                 </div>
        //                 <p>Choose a quiet space so that you can do the session uninterrupted. Make sure there is at least 2 hours gap between a meal and the class. Put all other devices aside and enjoy the session.</p>
        //                 <span className='aed-99'>AED 99/-</span>
        //                 <div class="flex">
        //                     <Button
        //                         style={{
        //                             boxShadow: "none",
        //                             background: "linear-gradient(90.19deg, #F24397 0.17%, #F64C3B 105.5%)",
        //                             color: '#fff',
        //                             borderRadius: '50px',
        //                             padding: "16px 24px",
        //                             fontWeight: "300",
        //                             display: "inline-flex"

        //                         }}
        //                     >Join now</Button>

        //                     <Button variant="outlined" style={{
        //                         boxShadow: "none",
        //                         background: "rgb(226, 226, 226)",
        //                         border: "1px solid #F24397",
        //                         borderRadius: "50px",
        //                         color: '#333',
        //                         fontWeight: "300",
        //                         marginLeft: "21px",
        //                         padding: "10px 30px"
        //                     }}>View Schedule</Button>
        //                 </div>
        //             </div>

        //         </div>
        //         <PrimaryDashLine className="absolute top-[420px] left-0 right-0 mx-auto" />
        //     </div>
        // </section>
    );
};

export default PrimaryVideo;