// Testimonials.js
import React from 'react';
import '../styles/Testimonials.css';

const testimonialsData = [
    {
        name: "John Doe",
        role: "CEO, Company Inc.",
        image: "path-to-image/john-doe.jpg",
        quote: "This platform has transformed our business in unimaginable ways. The tools and support are top-notch."
    },
    {
        name: "Jane Smith",
        role: "CTO, Another Co.",
        image: "path-to-image/jane-smith.jpg",
        quote: "A game-changer for our team. We couldn’t imagine our workflow without it now!"
    },
    {
        name: "Mike Johnson",
        role: "Product Manager, Startup Hub",
        image: "path-to-image/mike-johnson.jpg",
        quote: "This service offers unparalleled quality and efficiency. We are more productive than ever."
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-container">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-info">
                            <h4 className="testimonial-name">{testimonial.name}</h4>
                            <p className="testimonial-role">{testimonial.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
