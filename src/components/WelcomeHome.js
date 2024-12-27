import React from 'react'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import CardComponent from './CardComponent'
// import ImageSlider from './imageSliders'


export default function WelcomeHome() {

  const cardData = [
    {
        imageSrc: 'path-to-image1.jpg',
        title: 'Card Title 1',
        description: 'This is a description for card 1.',
        buttonText: 'Learn More',
    },
    {
        imageSrc: 'path-to-image2.jpg',
        title: 'Card Title 2',
        description: 'This is a description for card 2.',
        buttonText: 'Learn More',
    },
    {
        imageSrc: 'path-to-image3.jpg',
        title: 'Card Title 3',
        description: 'This is a description for card 3.',
        buttonText: 'Learn More',
    },
];


  return (
    <div >
        <HeroSection />
            {/* <ImageSlider/> */}

        <FeaturesSection />
            <Testimonials />
            <CallToAction />

            <div className="card-container">
                {cardData.map((card, index) => (
                    <CardComponent
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                    />
                ))}
            </div>
        </div>
  )
}
