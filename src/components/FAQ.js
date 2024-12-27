// src/components/FAQ.js

import React, { useState } from 'react';
import '../styles/FAQ.css'

const faqData = [
    { question: 'What is Dharitri?', answer: 'Dharitri is a platform aimed at promoting sustainable agriculture.' },
    { question: 'How can I join events?', answer: 'You can join events by registering on our Events Calendar section.' },
    { question: 'How do I become a member?', answer: 'To become a member, follow the instructions on our Community page.' },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq">
            {faqData.map((item, index) => (
                <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
                    <div className="faq-question">{item.question}</div>
                    {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
