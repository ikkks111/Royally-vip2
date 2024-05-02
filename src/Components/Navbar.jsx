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

// import React, { useState } from 'react';
// import logo from "../assets/logo.webp"
// import useScreenSize from '../hooks/useScreenSize';
// import OfficialSiteBtn from './OfficialSiteBtn';
// import SubscribeBtn from './SubscribeBtn';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const screenSize = useScreenSize();

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <div className={screenSize <= '600' ? 'flex flex-col md:flex-row justify-between items-center px-5 mt-5 navbar' : 'flex justify-between items-center px-4 md:px-16'}>
//             <div className="flex items-center">
//                 <a href="/"><img src={logo} alt="logo image" className='md:w-36 w-20' /></a>
//                 {screenSize <= '600' && (
//                     <button onClick={toggleMenu} className="md:hidden ml-auto p-2 focus:outline-none">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>
//                 )}
//             </div>
//             <ul className={`sidebar-menu ${screenSize <= '600' ? (menuOpen ? 'block' : 'hidden') : 'flex'} text-white md:flex`}>
//                 <li className='px-5 '><Link to="/" onClick={toggleMenu}>Home</Link></li>
//                 <li className='px-5'><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
//                 <li className='px-5'><Link to="/contact-us" onClick={toggleMenu}>Contact us</Link></li>
//             </ul>
//             <div className='flex gap-[10px]'>
//                 <a href="https://t.me/Rummy_family"><SubscribeBtn /></a>
//                 <a href="https://royally.vip/"><OfficialSiteBtn /></a>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
