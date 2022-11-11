import React, { useRef } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import './Faq.css';

const Faq = ({ faqId, setActiveFaqId, _id, ques, ans }) => {

    const iconRef = useRef();

    const toggleFaq = id => {

        if (id === faqId) {
            setActiveFaqId(null);
            iconRef.current.style = `
            transform: rotate(-180deg);
            transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            `
        }
        else {
            setActiveFaqId(id);
            iconRef.current.style = `
            transform: rotate(180deg);
            transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            `
        }

    }

    return (
        <div className="sr-accordion">
            <div onClick={() => toggleFaq(_id)} className="accordion-heading">
                <h3>{ques}</h3>
                <button ref={iconRef}>
                    {faqId === _id ? <FaMinus /> : <FaPlus />}
                </button>
            </div>
            <div className={(faqId === _id ? "show" : "") + " accordionContent"}>
                {/* <div className="accordion-text-box"> */}
                <p>{ans}</p>
                {/* </div> */}
            </div>
        </div>

    );
};

export default Faq;