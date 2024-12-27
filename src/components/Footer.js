// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/Dharitri.svg';
import '../styles/footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faLinkedin, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <div className="footer-logo-section">
                        <img src={logoImage} alt="Dharitri Logo" width="200px" />
                    </div>
                    <div className="footer-social-section">
                        <h4>Follow Us</h4>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
                

                <div className="footer-links-section">
                    <div>
                        <div className="footer-column">
                            <h4>Individuals</h4>
                            <Link to="/About/Dharitri">About Us</Link>
                            <Link to="/About/careers">Careers</Link>
                            <Link to="/community/blog">Blog</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Developers</h4>
                            <Link to="/help">Help Center</Link>
                            <Link to="/community">Community</Link>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                        <div className="footer-column">
                            <h4>The Farmer</h4>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/support">Support</Link>
                        </div>
                    </div>
                    <div>
                        <div className="footer-column">
                            <h4>Mother Earth</h4>
                            <Link to="/About/Dharitri">About Us</Link>
                            <Link to="/About/careers">Careers</Link>
                            <Link to="/community/blog">Blog</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Accountability</h4>
                            <Link to="/help">Help Center</Link>
                            <Link to="/community">Community</Link>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Ecosystem</h4>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/support">Support</Link>
                        </div>
                    </div>
                    <div>
                        <div className="footer-column">
                            <h4>Community</h4>
                            <Link to="/About/Dharitri">About Us</Link>
                            <Link to="/About/careers">Careers</Link>
                            <Link to="/community/blog">Blog</Link>
                        </div>
                        <div className="footer-column">
                            <h4>About</h4>
                            <Link to="/help">Help Center</Link>
                            <Link to="/community">Community</Link>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Dharitri Org. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
