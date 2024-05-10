import React from 'react';
import logo from "../assets/logo.webp"
import useScreenSize from '../hooks/useScreenSize';
import OfficialSiteBtn from './OfficialSiteBtn';
import SubscribeBtn from './SubscribeBtn';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const screenSize = useScreenSize()
    return (
        <div className={screenSize<='600'?'flex justify-between items-center px-5 mt-5 navbar':'flex justify-between items-center px-4 md:px-16'}>
            <a href="/"><img src={logo} alt="logo image" className='md:w-36 w-20' /></a>
            <ul className="sidebar-menu flex text-white ">
  <li className='px-5 '><Link to="/">Home</Link></li>
  <li className='px-5'><Link to="/about-us">About Us</Link></li>
  <li className='px-5'><Link to="/contact-us">Contact us</Link></li>
</ul>
            <div className='flex gap-[10px]'>
                <a href="https://t.me/Rummy_family"><SubscribeBtn /></a>
                <a href="https://royally.vip/"><OfficialSiteBtn /></a>
            </div>
        </div>
    );
};

export default Navbar;


