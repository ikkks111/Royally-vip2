import React from 'react';
import logo from "../assets/logo.png"
import useScreenSize from '../hooks/useScreenSize';
import OfficialSiteBtn from './OfficialSiteBtn';
import SubscribeBtn from './SubscribeBtn';
const Navbar = () => {
    const screenSize = useScreenSize()
    return (
        <div className={screenSize<='600'?'flex justify-between items-center px-5 mt-5 navbar':'flex justify-between items-center px-4 md:px-16 mt-2 md:mt-10'}>
            <a href="/"><img src={logo} alt="logo image" className='md:w-36 w-20' /></a>
            <div className='flex gap-[10px]'>
                <a href="https://t.me/Rummy_family"><SubscribeBtn /></a>
                <a href="https://royally.vip/"><OfficialSiteBtn /></a>
            </div>
        </div>
    );
};

export default Navbar;