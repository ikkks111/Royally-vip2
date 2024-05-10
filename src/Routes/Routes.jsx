import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/Contact';
import Disclaimer from '../pages/Disclaimer';
import RefundPolicy from '../pages/RefundPolicy';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Footer from '../footer/Footer';
// import Disclaimer from '../pages/Disclaimer';

const Routers = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/about-us" element={<About/>}>
            </Route>
            <Route path="/contact-us" element={<Contact/>}>
            </Route>
            <Route path="/disclaimer" element={<Disclaimer/>}>
            </Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}>
            </Route>
            {/* <Route path="/refund-policy" element={<RefundPolicy/>}>
            </Route> */}
          </Routes>
          <Footer/>
        </BrowserRouter>
      );
};

export default Routers