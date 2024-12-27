// CallToAction.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/CallToAction.css'; // Import the CSS file for styling

// const CallToAction = () => {
//     return (
//         <section className="cta-section">
//             <div className="cta-content">
//                 <h2 className="cta-title">Join the Future of Digital Economy</h2>
//                 <p className="cta-subtitle">Be a part of the next-generation blockchain ecosystem.</p>
//                 <Link to="/get-started" className="cta-button">Get Started</Link>
//             </div>
//         </section>
//     );
// };

// export default CallToAction;

// src/components/CallToAction.js
import React from 'react';
import '../styles/CallToAction.css';
const CallToAction = () => {
    return (
        <section className="call-to-action">
            <h2>Join the Dharitri Movement</h2>
            <p>Be part of a sustainable ecosystem. Connect, engage, and grow with us.</p>
            <button className="cta-button">Sign Up</button>
        </section>
    );
};

export default CallToAction;

