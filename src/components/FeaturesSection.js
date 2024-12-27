// src/components/FeaturesSection.js
import React from 'react';
import '../styles/FeaturesSection.css';
import { Link } from 'react-router-dom';

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <h2>Our Transaction</h2>
            <div className="feature-cards">
                <div>
                    <div className="feature-card-1">
                        <h3>Validator Nodes</h3>
                        <h2> 3,200 </h2>
                    </div>
                </div>
                <div>
                    <div className="feature-card">
                        <h3>Average Cost per Transaction</h3>
                        <h2>~$0.002</h2>
                    </div>
                    <div className="feature-card">
                        <h3>Total Transactions</h3>
                        <h2 api-data="transaction-count">468,134,795</h2>
                    </div>
                    <div className="feature-card">
                        <h3>Efficient. Scalable. Global.</h3>
                        <h2>Carbon Neutral</h2>
                        <Link to="/learn-more" className="hero-btn">Sustainability</Link> 
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default FeaturesSection;
