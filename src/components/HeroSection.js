// HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // For navigation buttons
import "swiper/css/pagination"; // For pagination dots
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import image1 from "../assets/images/img-1.jpg";
import image2 from "../assets/images/img-2.jpg";
import image3 from "../assets/images/img-3.jpg";
import image4 from "../assets/images/img-4.jpg";
const HeroSection = () => {
    
    const images = [image1, image2, image3, image4];

    return (
        <section className="hero-section">
            <div className="hero-overlay">
                
                <div className="hero-content">
                    {/*     */}
                    <h1 className="hero-heading">Explore the Future of Blockchain</h1>
                    <p className="hero-subheading">"Dharitri, powered by the MOVA blockchain, is a decentralized network built for next-gen applications. With over 1,000 + nodes, it delivers scalability through sharding, along with speed, security, and eco-friendliness.</p>
                   
                    <div className='btn-flex'>
                        <Link to="/learn-more" className="hero-button"> START BUILDING </Link>

                        <Link to="/learn-more" className="hero-button">  RESOURCE </Link>

                        <Link to="/learn-more" className="hero-button"> EXPLORE THE ECOSYSTEM </Link>
                    </div>

                    <div className="image-slider">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={10}
                            slidesPerView={1}
                            autoplay={{ delay: 2500 }}
                            loop={true}
                        >
                            {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <img src={src} alt={`Slide ${index}`} className="slider-image" />
                            </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
                
            </div>

        </section>
        
    );
};

export default HeroSection;
