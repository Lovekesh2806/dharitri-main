import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Header from './components/Header';  
import Footer from './components/Footer';
import './App.css';
import GetStarted from './components/GetStarted';
import About from './components/About';
import WelcomeHome from './components/WelcomeHome';
import MoaToken from './components/MoaToken';
import Onchainfa from './components/Onchainfa';
import Staking from './components/Staking';
import Sustainability from './components/Sustainability';
import BuildersHub from './components/BuildersHub';
import BuildDapp from './components/BuildDapp';
import Tutorials from './components/Tutorials';
import Tools from './components/Tools';
import Releases from './components/Releases';
import Roadmap from './components/Roadmap';
import Dharitri from './components/Dharitri';
import Mediakit from './components/Mediakit';
import Careers from './components/Careers';
import EventsCalendar from './components/EventsCalendar';
import Governance from './components/Governance';
import Ambassador from './components/Ambassador';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Page3 from './pages/Farmer/Page3';
import Page4 from './pages/Farmer/Page4';
import Page5 from './pages/Farmer/Page5';
import Page6 from './pages/Motherearth/Page6';
import Page7 from './pages/Motherearth/Page7';
import Page8 from './pages/Motherearth/Page8';
import Page9 from './pages/Motherearth/Page9';
import Page10 from './pages/Motherearth/Page10';
import Page11 from './pages/Accountability/Page11';
import Page12 from './pages/Accountability/Page12';
import Page13 from './pages/Accountability/Page13';
import Page14 from './pages/Accountability/Page14';
import Page15 from './pages/Accountability/Page15';
import Page16 from './pages/Ecosystem/Page16';
import Page17 from './pages/Ecosystem/Page17';
import Page18 from './pages/Ecosystem/Page18';
import Page19 from './pages/Ecosystem/Page19';
import Page20 from './pages/Ecosystem/Page20';
import PageOne1 from './pages/Farmer/PageOne1';
import Pagetwo2 from './pages/Farmer/Pagetwo2';

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<WelcomeHome />} />
                <Route path="/individuals/get-started" element={<GetStarted />} />
                <Route path="/aboutus" element={<About />} />
                <Route path="/individuals/moa-token" element={<MoaToken />} />
                <Route path="/individuals/on-chain-2fa" element={<Onchainfa />} />
                {/* <Route path="/individuals/on-chain-2fa" element={<Onchainfa />} /> */}
                <Route path="/individuals/staking" element={<Staking />} />
                <Route path="/individuals/sustainability" element={<Sustainability />} />
                <Route path="/builders-hub" element={<BuildersHub />} />
                <Route path="/builders/tutorials/build-your-first-multiversx-dapp-in-30-minutes" element={<BuildDapp />} />
                <Route path="/builders/tutorials" element={<Tutorials />} />
                <Route path="/builders/builder-tools-resources" element={<Tools />} />
                <Route path="/releases" element={<Releases />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/community/events-calendar" element={<EventsCalendar />} />
                <Route path="/community/governance" element={<Governance />} />
                <Route path="/community/ambassador-program" element={<Ambassador />} />
                <Route path="/community/faq" element={<FAQ />} />
                <Route path="/community/blog" element={<Blog />} />
                <Route path="/farmer/page1" element={<PageOne1 />} />
                <Route path="/farmer/page2" element={<Pagetwo2 />} />
                <Route path="/farmer/page3" element={<Page3 />} />
                <Route path="/farmer/page4" element={<Page4 />} />
                <Route path="/farmer/page5" element={<Page5 />} />
                <Route path="/MotherEarth/page6" element={<Page6 />} />
                <Route path="/MotherEarth/page7" element={<Page7 />} />
                <Route path="/MotherEarth/page8" element={<Page8 />} />
                <Route path="/MotherEarth/page9" element={<Page9 />} />
                <Route path="/MotherEarth/page10" element={<Page10 />} />
                <Route path="/accountability/page11" element={<Page11 />} />
                <Route path="/accountability/page12" element={<Page12 />} />
                <Route path="/accountability/page13" element={<Page13 />} />
                <Route path="/accountability/page14" element={<Page14 />} />
                <Route path="/accountability/page15" element={<Page15 />} />
                <Route path="/ecosystem/page16" element={<Page16 />} />
                <Route path="/ecosystem/page17" element={<Page17 />} />
                <Route path="/ecosystem/page18" element={<Page18/>} />
                <Route path="/ecosystem/page19" element={<Page19/>} />
                <Route path="/ecosystem/page20" element={<Page20/>} />
                <Route path="/about/Dharitri" element={<Dharitri />} />
                <Route path="/about/media-kit" element={<Mediakit />} />
                <Route path="/about/Careers" element={<Careers />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
export default App;
