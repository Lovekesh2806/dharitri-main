import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Import the CSS file
import logoImage from '../assets/images/Dharitri.svg';

const Header = () => {
    const [individualsDropdown, setIndividualsDropdown] = useState(false);
    const [developersDropdown, setDevelopersDropdown] = useState(false);
    const [farmerDropdown, setFarmerDropdown] = useState(false);
    const [motherEarthDropdown, setMotherEarthDropdown] = useState(false);
    const [accountabilityDropdown, setAccountabilityDropdown] = useState(false);
    const [ecosystemDropdown, setEcosystemDropdown] = useState(false);
    const [communityDropdown, setCommunityDropdown] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);

    const handleMouseEnter = (setDropdown) => () => setDropdown(true);
    const handleMouseLeave = (setDropdown) => () => setDropdown(false);

    return (
        <nav className="header">
            <div className="header-logo">
                <Link to="/">
                    <img src={logoImage} alt="Dharitri Logo"/>
                </Link>
            </div>

            <div className="nav-menu">
                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setIndividualsDropdown)}
                    onMouseLeave={handleMouseLeave(setIndividualsDropdown)}
                >
                    <span>Individuals </span>
                    {individualsDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/individuals/get-started">Get Started</Link></div>
                            <div className="dropdown-item"><Link to="/individuals/moa-token">The MOA Token</Link></div>
                            <div className="dropdown-item"><Link to="/individuals/on-chain-2fa">On-chain 2FA</Link></div>
                            <div className="dropdown-item"><Link to="/individuals/staking">Staking</Link></div>
                            <div className="dropdown-item"><Link to="/individuals/sustainability">Sustainability</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setDevelopersDropdown)}
                    onMouseLeave={handleMouseLeave(setDevelopersDropdown)}
                >
                    <span>Developers </span>
                    {developersDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/builders-hub">Builders Hub</Link></div>
                            <div className="dropdown-item"><Link to="/builders/tutorials/build-your-first-multiversx-dapp-in-30-minutes">Build a dApp in 30 minutes</Link></div>
                            <div className="dropdown-item"><Link to="/builders/tutorials">Tutorials</Link></div>
                            <div className="dropdown-item"><Link to="/builders/builder-tools-resources">Tools & Resources</Link></div>
                            <div className="dropdown-item"><Link to="/releases">Releases</Link></div>
                            <div className="dropdown-item"><Link to="/roadmap">Tech Roadmap</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setFarmerDropdown)}
                    onMouseLeave={handleMouseLeave(setFarmerDropdown)}
                >
                    <span>The Farmer </span>
                    {farmerDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/farmer/page1">Page1</Link></div>
                            <div className="dropdown-item"><Link to="/farmer/page2">Page2</Link></div>
                            <div className="dropdown-item"><Link to="/farmer/page3">Page3</Link></div>
                            <div className="dropdown-item"><Link to="/farmer/page4">Page4</Link></div>
                            <div className="dropdown-item"><Link to="/farmer/page5">Page5</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setMotherEarthDropdown)}
                    onMouseLeave={handleMouseLeave(setMotherEarthDropdown)}
                >
                    <span>Mother Earth </span>
                    {motherEarthDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/MotherEarth/page6">Page6</Link></div>
                            <div className="dropdown-item"><Link to="/MotherEarth/page7">page7</Link></div>
                            <div className="dropdown-item"><Link to="/MotherEarth/page8">Page8</Link></div>
                            <div className="dropdown-item"><Link to="/MotherEarth/page9">Page9</Link></div>
                            <div className="dropdown-item"><Link to="/MotherEarth/page10">page10</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setAccountabilityDropdown)}
                    onMouseLeave={handleMouseLeave(setAccountabilityDropdown)}
                >
                    <span>Accountability </span>
                    {accountabilityDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/accountability/page11">Page11</Link></div>
                            <div className="dropdown-item"><Link to="/accountability/page12">Page12</Link></div>
                            <div className="dropdown-item"><Link to="/accountability/page13">Page13</Link></div>
                            <div className="dropdown-item"><Link to="/accountability/page14">Page14</Link></div>
                            <div className="dropdown-item"><Link to="/accountability/page15">Page15</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setEcosystemDropdown)}
                    onMouseLeave={handleMouseLeave(setEcosystemDropdown)}
                >
                    <span>Ecosystem </span>
                    {ecosystemDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/ecosystem/page16">Page16</Link></div>
                            <div className="dropdown-item"><Link to="/ecosystem/page17">Page17</Link></div>
                            <div className="dropdown-item"><Link to="/ecosystem/page18">Page18</Link></div>
                            <div className="dropdown-item"><Link to="/ecosystem/page19">Page19</Link></div>
                            <div className="dropdown-item"><Link to="/ecosystem/page20">Page20</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setCommunityDropdown)}
                    onMouseLeave={handleMouseLeave(setCommunityDropdown)}
                >
                    <span>Community </span>
                    {communityDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/community/events-calendar">Events Calendar</Link></div>
                            <div className="dropdown-item"><Link to="/community/governance">Governance</Link></div>
                            <div className="dropdown-item"><Link to="/community/ambassador-program">Ambassador Program</Link></div>
                            <div className="dropdown-item"><Link to="/community/faq">FAQ</Link></div>
                            <div className="dropdown-item"><Link to="/community/blog">Blog</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setAboutDropdown)}
                    onMouseLeave={handleMouseLeave(setAboutDropdown)}
                >
                    <span>About </span>
                    {aboutDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/about/Dharitri">Dharitri</Link></div>
                            <div className="dropdown-item"><Link to="/about/media-kit">Media Kit</Link></div>
                            <div className="dropdown-item"><Link to="/about/Careers">Careers</Link></div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
