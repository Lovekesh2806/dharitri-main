// GetStarted.js
import React, { useState } from 'react';
import './GetStarted.css';

const GetStarted = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const features = [
        { title: "Secure & Scalable", description: "Built for high performance and security." },
        { title: "Easy to Use", description: "Intuitive interface and seamless onboarding." },
        { title: "Advanced Features", description: "Experience cutting-edge blockchain features." }
    ];

    const faqs = [
        { question: "What is Dharitri?", answer: "Dharitri is a scalable, secure blockchain platform." },
        { question: "How do I get started?", answer: "Follow our step-by-step guide to set up your account." },
        { question: "Is there a fee?", answer: "Some transactions may have fees, depending on the activity." }
    ];

    return (
        <div className="get-started-page">
            <section className="intro-section">
                <h1>Get Started with Dharitri</h1>
                <p>Start exploring the possibilities of Dharitri with easy onboarding steps.</p>
                <button className="primary-button">Learn More</button>
            </section>
            <section className="feature-section">
                <h2>Why Choose Dharitri?</h2>
                <div className="feature-cards">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-items">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                {faq.question}
                            </div>
                            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default GetStarted;
