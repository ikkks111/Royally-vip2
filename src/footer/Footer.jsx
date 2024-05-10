import React from 'react';

import samsung from "./../assets/Samsung _Galaxy_S22.webp"
import useScreenSize from '../hooks/useScreenSize';
import insta from "./../assets/instagram.webp"
import facebook from "./../assets/facebook.webp"
import telegram from "./../assets/telegram.webp"
import { Link } from 'react-router-dom';
const Footer = () => {
    const screenSize = useScreenSize()
    return (
        <div className='screenseven py-4 md:px-10 sm:px-4 flex md:flex-row items-center flex-wrap justify-center sm:gap-5 md:gap-0 sm:flex-col-reverse'>
           <div className='md:w-[20%] flex flex-row justify-start gap-3 items-center'>
          <a href="https://www.instagram.com/royallyrummyvip/" target="_blank" rel="noopener noreferrer">
    <img src={insta} alt="Instagram icon" className='w-14' />
</a>
<a href="https://www.facebook.com/profile.php?id=61557381221402" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="import icon" className='w-14'/>
            </a>
            <a href="https://t.me/Rummy_family" target="_blank" rel="noopener noreferrer">
            <img src={telegram} alt="import icon" className='w-14'/>
            </a>
            </div>
          <div className='md:w-[80%] items-center  flex flex-row justify-end'>
          <p>
          {/* <Link to="/">Home</Link> |  */}
        <Link to="/about-us">About Us</Link>&nbsp;|&nbsp;
        <Link to="/contact-us">Contact Us</Link>&nbsp;|&nbsp;
        <Link to="/disclaimer">Disclaimer</Link>&nbsp;|&nbsp;
        {/* <Link to="/refund-policy">Refund Policy</Link>&nbsp;|&nbsp;  */}
        <Link to="/privacy-policy">Privacy Policy</Link>
    </p>
          </div>
         
                
        </div>
    );
};

export default Footer;