import React from 'react';
import ReactCompareImage from "react-compare-image";
import before2 from '../../../assets/10-1.jpg';
import after2 from '../../../assets/10.jpg';
import before3 from '../../../assets/11.jpg';
import after3 from '../../../assets/11-1.jpg';
import before4 from '../../../assets/5-1.jpg';
import after4 from '../../../assets/5.jpg';
import before5 from '../../../assets/6-1.jpg';
import after5 from '../../../assets/6.jpg';
import before6 from '../../../assets/9.jpg';
import after6 from '../../../assets/9-1.jpg';
import before7 from '../../../assets/cartoon-example.jpg';
import after7 from '../../../assets/cartoon-example-result.jpg';
import './ImageComparisonSlider.css';

const ImageComparisonSlider = () => {

    const images = [
        {
            _id: 1,
            imgBefore: before2,
            imgAfter: after2
        },
        {
            _id: 2,
            imgBefore: before3,
            imgAfter: after3
        },
        {
            _id: 3,
            imgBefore: before4,
            imgAfter: after4
        },
        {
            _id: 4,
            imgBefore: before5,
            imgAfter: after5
        },
        {
            _id: 5,
            imgBefore: before6,
            imgAfter: after6
        },

        {
            _id: 7,
            imgBefore: before7,
            imgAfter: after7
        }
    ]

    return (
        <section className='image-compaire-section'>
            <div className='image-compaire-wrapper'>
                <h4 className='section-heading'>See Our <span className='text-underline'>Project Works</span></h4>
                <p>Think how much we care about your marble. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis, fuga corporis ipsum quasi aperiam eius tempore inventore exercitationem odio beatae ut, esse eveniet commodi saepe. Iste perferendis a velit!</p>
                <div className='img-slider-section'>

                    {
                        images.map(img =>
                            <div key={img._id} className="mainWrapper">
                                <div className="contentWrapper">
                                    <ReactCompareImage
                                        vertical={false}
                                        leftImage={img.imgBefore}
                                        rightImage={img.imgAfter}
                                    />
                                    <div className='before-after-title'>
                                        <div>
                                            <h6>Before</h6>
                                            <h6>After</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default ImageComparisonSlider;