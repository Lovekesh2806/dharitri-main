// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/header.css';
// import logoImage from '../assets/images/Dharitri.svg';

// const Header = () => {
//     const [individualsDropdown, setIndividualsDropdown] = useState(false);
//     const [developersDropdown, setDevelopersDropdown] = useState(false);
//     const [farmerDropdown, setFarmerDropdown] = useState(false);
//     const [motherEarthDropdown, setMotherEarthDropdown] = useState(false);
//     const [accountabilityDropdown, setAccountabilityDropdown] = useState(false);
//     const [ecosystemDropdown, setEcosystemDropdown] = useState(false);
//     const [communityDropdown, setCommunityDropdown] = useState(false);
//     const [aboutDropdown, setAboutDropdown] = useState(false);

//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [mobileDropdown, setMobileDropdown] = useState('');

//     const handleMouseEnter = (setDropdown) => () => setDropdown(true);
//     const handleMouseLeave = (setDropdown) => () => setDropdown(false);

//     const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//     const toggleMobileDropdown = (dropdownName) => {
//         setMobileDropdown(mobileDropdown === dropdownName ? '' : dropdownName);
//     };

//     const navItems = [
//         {
//             title: 'Individuals',
//             items: [
//                 { to: "/individuals/get-started", text: "Get Started" },
//                 { to: "/individuals/moa-token", text: "The MOA Token" },
//                 { to: "/individuals/on-chain-2fa", text: "On-chain 2FA" },
//                 { to: "/individuals/staking", text: "Staking" },
//                 { to: "/individuals/sustainability", text: "Sustainability" }
//             ]
//         },
//         {
//             title: 'Developers',
//             items: [
//                 { to: "/builders-hub", text: "Builders Hub" },
//                 { to: "/builders/tutorials/build-your-first-multiversx-dapp-in-30-minutes", text: "Build a dApp in 30 minutes" },
//                 { to: "/builders/tutorials", text: "Tutorials" },
//                 { to: "/builders/builder-tools-resources", text: "Tools & Resources" },
//                 { to: "/releases", text: "Releases" },
//                 { to: "/roadmap", text: "Tech Roadmap" }
//             ]
//         },
//         // Add other sections similarly...
//     ];

//     return (
//         <nav className="header">
//             <div className="header-logo">
//                 <Link to="/">
//                     <img src={logoImage} alt="Dharitri Logo"/>
//                 </Link>
//             </div>
            
//             {/* Hamburger Menu */}
//             <div className="hamburger" onClick={toggleSidebar}>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="nav-menu">
//                 <div
//                     className="nav-item"
//                     onMouseEnter={handleMouseEnter(setIndividualsDropdown)}
//                     onMouseLeave={handleMouseLeave(setIndividualsDropdown)}
//                 >
//                     <span>Individuals </span>
//                     {individualsDropdown && (
//                         <div className="dropdown-menu">
//                             <div className="dropdown-item"><Link to="/individuals/get-started">Get Started</Link></div>
//                             <div className="dropdown-item"><Link to="/individuals/moa-token">The MOA Token</Link></div>
//                             <div className="dropdown-item"><Link to="/individuals/on-chain-2fa">On-chain 2FA</Link></div>
//                             <div className="dropdown-item"><Link to="/individuals/staking">Staking</Link></div>
//                             <div className="dropdown-item"><Link to="/individuals/sustainability">Sustainability</Link></div>
//                         </div>
//                     )}
//                 </div>

                
//                 {/* Other desktop menu items... */}
//             </div>

//             {/* Mobile Sidebar */}
//             <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
//                 <div className="sidebar-header">
//                     <img src={logoImage} alt="Dharitri Logo" className="sidebar-logo"/>
//                     <button className="close-sidebar" onClick={toggleSidebar}>×</button>
//                 </div>
                
//                 <div className="sidebar-content">
//                     {/* Individuals */}
//                     <div className="sidebar-item">
//                         <div 
//                             className="sidebar-title" 
//                             onClick={() => toggleMobileDropdown('individuals')}
//                         >
//                             <span>Individuals</span>
//                             <span className={`arrow ${mobileDropdown === 'individuals' ? 'arrow-down' : ''}`}>▸</span>
//                         </div>
//                         <div className={`sidebar-dropdown ${mobileDropdown === 'individuals' ? 'show' : ''}`}>
//                             <Link to="/individuals/get-started" onClick={toggleSidebar}>Get Started</Link>
//                             <Link to="/individuals/moa-token" onClick={toggleSidebar}>The MOA Token</Link>
//                             <Link to="/individuals/on-chain-2fa" onClick={toggleSidebar}>On-chain 2FA</Link>
//                             <Link to="/individuals/staking" onClick={toggleSidebar}>Staking</Link>
//                             <Link to="/individuals/sustainability" onClick={toggleSidebar}>Sustainability</Link>
//                         </div>
//                     </div>

//                     <div className="sidebar-item">
//                         <div 
//                             className="sidebar-title" 
//                             onClick={() => toggleMobileDropdown('individuals')}
//                         >
//                             <span>Developers</span>
//                             <span className={`arrow ${mobileDropdown === 'individuals' ? 'arrow-down' : ''}`}>▸</span>
//                         </div>
//                         <div className={`sidebar-dropdown ${mobileDropdown === 'individuals' ? 'show' : ''}`}>
//                             <Link to="/individuals/get-started" onClick={toggleSidebar}>Get Started</Link>
//                             <Link to="/individuals/moa-token" onClick={toggleSidebar}>The MOA Token</Link>
//                             <Link to="/individuals/on-chain-2fa" onClick={toggleSidebar}>On-chain 2FA</Link>
//                             <Link to="/individuals/staking" onClick={toggleSidebar}>Staking</Link>
//                             <Link to="/individuals/sustainability" onClick={toggleSidebar}>Sustainability</Link>
//                         </div>
//                     </div>

//                     <div className="sidebar-item">
//                         <div 
//                             className="sidebar-title" 
//                             onClick={() => toggleMobileDropdown('individuals')}
//                         >
//                             <span>The Farmer</span>
//                             <span className={`arrow ${mobileDropdown === 'individuals' ? 'arrow-down' : ''}`}>▸</span>
//                         </div>
//                         <div className={`sidebar-dropdown ${mobileDropdown === 'individuals' ? 'show' : ''}`}>
//                             <Link to="/individuals/get-started" onClick={toggleSidebar}>Get Started</Link>
//                             <Link to="/individuals/moa-token" onClick={toggleSidebar}>The MOA Token</Link>
//                             <Link to="/individuals/on-chain-2fa" onClick={toggleSidebar}>On-chain 2FA</Link>
//                             <Link to="/individuals/staking" onClick={toggleSidebar}>Staking</Link>
//                             <Link to="/individuals/sustainability" onClick={toggleSidebar}>Sustainability</Link>
//                         </div>
//                     </div>

//                     <div className="sidebar-item">
//                         <div 
//                             className="sidebar-title" 
//                             onClick={() => toggleMobileDropdown('individuals')}
//                         >
//                             <span>Mother Earth</span>
//                             <span className={`arrow ${mobileDropdown === 'individuals' ? 'arrow-down' : ''}`}>▸</span>
//                         </div>
//                         <div className={`sidebar-dropdown ${mobileDropdown === 'individuals' ? 'show' : ''}`}>
//                             <Link to="/individuals/get-started" onClick={toggleSidebar}>Get Started</Link>
//                             <Link to="/individuals/moa-token" onClick={toggleSidebar}>The MOA Token</Link>
//                             <Link to="/individuals/on-chain-2fa" onClick={toggleSidebar}>On-chain 2FA</Link>
//                             <Link to="/individuals/staking" onClick={toggleSidebar}>Staking</Link>
//                             <Link to="/individuals/sustainability" onClick={toggleSidebar}>Sustainability</Link>
//                         </div>
//                     </div>

//                     <div className="sidebar-item">
//                         <div 
//                             className="sidebar-title" 
//                             onClick={() => toggleMobileDropdown('individuals')}
//                         >
//                             <span>Accountability</span>
//                             <span className={`arrow ${mobileDropdown === 'individuals' ? 'arrow-down' : ''}`}>▸</span>
//                         </div>
//                         <div className={`sidebar-dropdown ${mobileDropdown === 'individuals' ? 'show' : ''}`}>
//                             <Link to="/individuals/get-started" onClick={toggleSidebar}>Get Started</Link>
//                             <Link to="/individuals/moa-token" onClick={toggleSidebar}>The MOA Token</Link>
//                             <Link to="/individuals/on-chain-2fa" onClick={toggleSidebar}>On-chain 2FA</Link>
//                             <Link to="/individuals/staking" onClick={toggleSidebar}>Staking</Link>
//                             <Link to="/individuals/sustainability" onClick={toggleSidebar}>Sustainability</Link>
//                         </div>
//                     </div>

//                     <div className="sidebar-item">
//                         <div 
//                             className="sidebar-title" 
//                             onClick={() => toggleMobileDropdown('individuals')}
//                         >
//                             <span>Ecosystem</span>
//                             <span className={`arrow ${mobileDropdown === 'individuals' ? 'arrow-down' : ''}`}>▸</span>
//                         </div>
//                         <div className={`sidebar-dropdown ${mobileDropdown === 'individuals' ? 'show' : ''}`}>
//                             <Link to="/individuals/get-started" onClick={toggleSidebar}>Get Started</Link>
//                             <Link to="/individuals/moa-token" onClick={toggleSidebar}>The MOA Token</Link>
//                             <Link to="/individuals/on-chain-2fa" onClick={toggleSidebar}>On-chain 2FA</Link>
//                             <Link to="/individuals/staking" onClick={toggleSidebar}>Staking</Link>
//                             <Link to="/individuals/sustainability" onClick={toggleSidebar}>Sustainability</Link>
//                         </div>
//                     </div>

//                     <div className="sidebar-item">
//                         <div 
//                             className="sidebar-title" 
//                             onClick={() => toggleMobileDropdown('individuals')}
//                         >
//                             <span>Community</span>
//                             <span className={`arrow ${mobileDropdown === 'individuals' ? 'arrow-down' : ''}`}>▸</span>
//                         </div>
//                         <div className={`sidebar-dropdown ${mobileDropdown === 'individuals' ? 'show' : ''}`}>
//                             <Link to="/individuals/get-started" onClick={toggleSidebar}>Get Started</Link>
//                             <Link to="/individuals/moa-token" onClick={toggleSidebar}>The MOA Token</Link>
//                             <Link to="/individuals/on-chain-2fa" onClick={toggleSidebar}>On-chain 2FA</Link>
//                             <Link to="/individuals/staking" onClick={toggleSidebar}>Staking</Link>
//                             <Link to="/individuals/sustainability" onClick={toggleSidebar}>Sustainability</Link>
//                         </div>
//                     </div>

//                     <div className="sidebar-item">
//                         <div 
//                             className="sidebar-title" 
//                             onClick={() => toggleMobileDropdown('individuals')}
//                         >
//                             <span>About</span>
//                             <span className={`arrow ${mobileDropdown === 'individuals' ? 'arrow-down' : ''}`}>▸</span>
//                         </div>
//                         <div className={`sidebar-dropdown ${mobileDropdown === 'individuals' ? 'show' : ''}`}>
//                             <Link to="/individuals/get-started" onClick={toggleSidebar}>Get Started</Link>
//                             <Link to="/individuals/moa-token" onClick={toggleSidebar}>The MOA Token</Link>
//                             <Link to="/individuals/on-chain-2fa" onClick={toggleSidebar}>On-chain 2FA</Link>
//                             <Link to="/individuals/staking" onClick={toggleSidebar}>Staking</Link>
//                             <Link to="/individuals/sustainability" onClick={toggleSidebar}>Sustainability</Link>
//                         </div>
//                     </div>

//                     {/* Add similar blocks for other navigation items */}
//                 </div>
//             </div>

//             {/* Overlay for mobile sidebar */}
//             {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
//         </nav>
//     );
// };

// export default Header;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import logoImage from '../assets/images/Dharitri.svg';

const Header = () => {
    // Desktop dropdown states
    const [individualsDropdown, setIndividualsDropdown] = useState(false);
    const [developersDropdown, setDevelopersDropdown] = useState(false);
    const [farmerDropdown, setFarmerDropdown] = useState(false);
    const [motherEarthDropdown, setMotherEarthDropdown] = useState(false);
    const [accountabilityDropdown, setAccountabilityDropdown] = useState(false);
    const [ecosystemDropdown, setEcosystemDropdown] = useState(false);
    const [communityDropdown, setCommunityDropdown] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);

    // Mobile sidebar state
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState('');

    const handleMouseEnter = (setDropdown) => () => setDropdown(true);
    const handleMouseLeave = (setDropdown) => () => setDropdown(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const toggleMobileDropdown = (dropdownName) => {
        setMobileDropdown(mobileDropdown === dropdownName ? '' : dropdownName);
    };

    return (
        <nav className="header">
            <div className="header-logo">
                <Link to="/">
                    <img src={logoImage} alt="Dharitri Logo"/>
                </Link>
            </div>
            
            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleSidebar}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-menu">
                {/* Individuals */}
                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setIndividualsDropdown)}
                    onMouseLeave={handleMouseLeave(setIndividualsDropdown)}
                >
                    <span>Individuals</span>
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

                {/* Developers */}
                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setDevelopersDropdown)}
                    onMouseLeave={handleMouseLeave(setDevelopersDropdown)}
                >
                    <span>Developers</span>
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

                {/* The Farmer */}
                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setFarmerDropdown)}
                    onMouseLeave={handleMouseLeave(setFarmerDropdown)}
                >
                    <span>The Farmer</span>
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

                {/* Mother Earth */}
                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setMotherEarthDropdown)}
                    onMouseLeave={handleMouseLeave(setMotherEarthDropdown)}
                >
                    <span>Mother Earth</span>
                    {motherEarthDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/MotherEarth/page6">Page6</Link></div>
                            <div className="dropdown-item"><Link to="/MotherEarth/page7">Page7</Link></div>
                            <div className="dropdown-item"><Link to="/MotherEarth/page8">Page8</Link></div>
                            <div className="dropdown-item"><Link to="/MotherEarth/page9">Page9</Link></div>
                            <div className="dropdown-item"><Link to="/MotherEarth/page10">Page10</Link></div>
                        </div>
                    )}
                </div>

                {/* Accountability */}
                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setAccountabilityDropdown)}
                    onMouseLeave={handleMouseLeave(setAccountabilityDropdown)}
                >
                    <span>Accountability</span>
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

                {/* Ecosystem */}
                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setEcosystemDropdown)}
                    onMouseLeave={handleMouseLeave(setEcosystemDropdown)}
                >
                    <span>Ecosystem</span>
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

                {/* Community */}
                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setCommunityDropdown)}
                    onMouseLeave={handleMouseLeave(setCommunityDropdown)}
                >
                    <span>Community</span>
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

                {/* About */}
                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setAboutDropdown)}
                    onMouseLeave={handleMouseLeave(setAboutDropdown)}
                >
                    <span>About</span>
                    {aboutDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/about/Dharitri">Dharitri</Link></div>
                            <div className="dropdown-item"><Link to="/about/media-kit">Media Kit</Link></div>
                            <div className="dropdown-item"><Link to="/about/Careers">Careers</Link></div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
                <div className="sidebar-header">
                    <img src={logoImage} alt="Dharitri Logo" className="sidebar-logo"/>
                    <button className="close-sidebar" onClick={toggleSidebar}>×</button>
                </div>
                
                <div className="sidebar-content">
                    {/* Individuals */}
                    <div className="sidebar-item">
                        <div 
                            className="sidebar-title" 
                            onClick={() => toggleMobileDropdown('individuals')}
                        >
                            <span>Individuals</span>
                            <span className={`arrow ${mobileDropdown === 'individuals' ? 'arrow-down' : ''}`}>▸</span>
                        </div>
                        <div className={`sidebar-dropdown ${mobileDropdown === 'individuals' ? 'show' : ''}`}>
                            <Link to="/individuals/get-started" onClick={toggleSidebar}>Get Started</Link>
                            <Link to="/individuals/moa-token" onClick={toggleSidebar}>The MOA Token</Link>
                            <Link to="/individuals/on-chain-2fa" onClick={toggleSidebar}>On-chain 2FA</Link>
                            <Link to="/individuals/staking" onClick={toggleSidebar}>Staking</Link>
                            <Link to="/individuals/sustainability" onClick={toggleSidebar}>Sustainability</Link>
                        </div>
                    </div>

                    {/* Developers */}
                    <div className="sidebar-item">
                        <div 
                            className="sidebar-title" 
                            onClick={() => toggleMobileDropdown('developers')}
                        >
                            <span>Developers</span>
                            <span className={`arrow ${mobileDropdown === 'developers' ? 'arrow-down' : ''}`}>▸</span>
                        </div>
                        <div className={`sidebar-dropdown ${mobileDropdown === 'developers' ? 'show' : ''}`}>
                            <Link to="/builders-hub" onClick={toggleSidebar}>Builders Hub</Link>
                            <Link to="/builders/tutorials/build-your-first-multiversx-dapp-in-30-minutes" onClick={toggleSidebar}>Build a dApp in 30 minutes</Link>
                            <Link to="/builders/tutorials" onClick={toggleSidebar}>Tutorials</Link>
                            <Link to="/builders/builder-tools-resources" onClick={toggleSidebar}>Tools & Resources</Link>
                            <Link to="/releases" onClick={toggleSidebar}>Releases</Link>
                            <Link to="/roadmap" onClick={toggleSidebar}>Tech Roadmap</Link>
                        </div>
                    </div>

                    {/* The Farmer */}
                    <div className="sidebar-item">
                        <div 
                            className="sidebar-title" 
                            onClick={() => toggleMobileDropdown('farmer')}
                        >
                            <span>The Farmer</span>
                            <span className={`arrow ${mobileDropdown === 'farmer' ? 'arrow-down' : ''}`}>▸</span>
                        </div>
                        <div className={`sidebar-dropdown ${mobileDropdown === 'farmer' ? 'show' : ''}`}>
                            <Link to="/farmer/page1" onClick={toggleSidebar}>Page1</Link>
                            <Link to="/farmer/page2" onClick={toggleSidebar}>Page2</Link>
                            <Link to="/farmer/page3" onClick={toggleSidebar}>Page3</Link>
                            <Link to="/farmer/page4" onClick={toggleSidebar}>Page4</Link>
                            <Link to="/farmer/page5" onClick={toggleSidebar}>Page5</Link>
                        </div>
                    </div>

                    {/* Mother Earth */}
                    <div className="sidebar-item">
                        <div 
                            className="sidebar-title" 
                            onClick={() => toggleMobileDropdown('motherEarth')}
                        >
                            <span>Mother Earth</span>
                            <span className={`arrow ${mobileDropdown === 'motherEarth' ? 'arrow-down' : ''}`}>▸</span>
                        </div>
                        <div className={`sidebar-dropdown ${mobileDropdown === 'motherEarth' ? 'show' : ''}`}>
                            <Link to="/MotherEarth/page6" onClick={toggleSidebar}>Page6</Link>
                            <Link to="/MotherEarth/page7" onClick={toggleSidebar}>Page7</Link>
                            <Link to="/MotherEarth/page8" onClick={toggleSidebar}>Page8</Link>
                            <Link to="/MotherEarth/page9" onClick={toggleSidebar}>Page9</Link>
                            <Link to="/MotherEarth/page10" onClick={toggleSidebar}>Page10</Link>
                        </div>
                    </div>

                    {/* Accountability */}
                    <div className="sidebar-item">
                        <div 
                            className="sidebar-title" 
                            onClick={() => toggleMobileDropdown('accountability')}
                        >
                            <span>Accountability</span>
                            <span className={`arrow ${mobileDropdown === 'accountability' ? 'arrow-down' : ''}`}>▸</span>
                        </div>
                        <div className={`sidebar-dropdown ${mobileDropdown === 'accountability' ? 'show' : ''}`}>
                            <Link to="/accountability/page11" onClick={toggleSidebar}>Page11</Link>
                            <Link to="/accountability/page12" onClick={toggleSidebar}>Page12</Link>
                            <Link to="/accountability/page13" onClick={toggleSidebar}>Page13</Link>
                            <Link to="/accountability/page14" onClick={toggleSidebar}>Page14</Link>
                            <Link to="/accountability/page15" onClick={toggleSidebar}>Page15</Link>
                        </div>
                    </div>

                    {/* Ecosystem */}
                    <div className="sidebar-item">
                        <div 
                            className="sidebar-title" 
                            onClick={() => toggleMobileDropdown('ecosystem')}
                        >
                            <span>Ecosystem</span>
                            <span className={`arrow ${mobileDropdown === 'ecosystem' ? 'arrow-down' : ''}`}>▸</span>
                        </div>
                        <div className={`sidebar-dropdown ${mobileDropdown === 'ecosystem' ? 'show' : ''}`}>
                            <Link to="/ecosystem/page16" onClick={toggleSidebar}>Page16</Link>
                            <Link to="/ecosystem/page17" onClick={toggleSidebar}>Page17</Link>
                            <Link to="/ecosystem/page18" onClick={toggleSidebar}>Page18</Link>
                            <Link to="/ecosystem/page19" onClick={toggleSidebar}>Page19</Link>
                            <Link to="/ecosystem/page20" onClick={toggleSidebar}>Page20</Link>
                        </div>
                    </div>

                    {/* Community */}
                    <div className="sidebar-item">
                        <div 
                            className="sidebar-title" 
                            onClick={() => toggleMobileDropdown('community')}
                        >
                            <span>Community</span>
                            <span className={`arrow ${mobileDropdown === 'community' ? 'arrow-down' : ''}`}>▸</span>
                        </div>
                        <div className={`sidebar-dropdown ${mobileDropdown === 'community' ? 'show' : ''}`}>
                            <Link to="/community/events-calendar" onClick={toggleSidebar}>Events Calendar</Link>
                            <Link to="/community/governance" onClick={toggleSidebar}>Governance</Link>
                            <Link to="/community/ambassador-program" onClick={toggleSidebar}>Ambassador Program</Link>
                            <Link to="/community/faq" onClick={toggleSidebar}>FAQ</Link>
                            <Link to="/community/blog" onClick={toggleSidebar}>Blog</Link>
                        </div>
                    </div>

                    {/* About */}
                    <div className="sidebar-item">
                        <div 
                            className="sidebar-title" 
                            onClick={() => toggleMobileDropdown('about')}
                        >
                            <span>About</span>
                            <span className={`arrow ${mobileDropdown === 'about' ? 'arrow-down' : ''}`}>▸</span>
                        </div>
                        <div className={`sidebar-dropdown ${mobileDropdown === 'about' ? 'show' : ''}`}>
                            <Link to="/about/Dharitri" onClick={toggleSidebar}>Dharitri</Link>
                            <Link to="/about/media-kit" onClick={toggleSidebar}>Media Kit</Link>
                            <Link to="/about/Careers" onClick={toggleSidebar}>Careers</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile sidebar */}
            {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
        </nav>
    );
};

export default Header;  