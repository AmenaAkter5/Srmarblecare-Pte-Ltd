import React, { useState } from 'react';
import Faq from './Faq';
import { faqData } from './FaqData';
import thinker from '../../../assets/svg/thinker.svg';
import './Faqs.css';

const Faqs = () => {

    const [faqId, setActiveFaqId] = useState(null);

    return (
        <section className='faqs-section' >
            <div className='faqs-wrapper'>
                <div className='faq-flex-items'>
                    <img src={thinker} alt="" />
                    <h4>Answers to frequently asked <span className='text-underline-II'>questions</span></h4>
                    <p>We have listed here the answers to some of your common questions. We request you to read this list once before asking questions. Then you don't have to wait for our reply and save your precious time.</p>
                </div>
                <div className='faq-flex-items'>
                    {
                        faqData.map(faq => <Faq key={faq._id} faqId={faqId} setActiveFaqId={setActiveFaqId} {...faq} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Faqs;