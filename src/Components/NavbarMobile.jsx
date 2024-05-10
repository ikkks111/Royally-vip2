import React, { useState } from 'react';
import logo from "../assets/logo.webp"
import useScreenSize from '../hooks/useScreenSize';
import OfficialSiteBtn from './OfficialSiteBtn';
import SubscribeBtn from './SubscribeBtn';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiMenu } from "react-icons/fi";

const NavbarMobile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <div className='flex w-full items-center justify-center px-4 mt-2'>
           <div className='w-1/2 '>
          <FiMenu onClick={handleShow} className='cursor-pointer text-white h-10 w-10'/>
    
          <Offcanvas className=' text-black bg-gray-200' show={show} onHide={handleClose}  >
            <Offcanvas.Header closeButton className='bg-white py-4' >
              {/* <Offcanvas.Title> <a href="/"><img src={logo} alt="logo image" className='md:w-28 w-28' /></a></Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
            
            <ul className="sidebar-menu flex flex-col text-black">
  <li className='menu-item font-bold text-[24px] border-gray-400 border-1 p-4'><Link to="/">Home</Link></li>
<li className='menu-item font-bold text-[24px] border-gray-400 border-1 p-4'><Link to="/about-us">About Us</Link></li>
 <li className='menu-item font-bold text-[24px] border-gray-400 border-1 p-4'><Link to="/contact-us">Contact us</Link></li>
</ul>
<div className='flex gap-[20px] mx-2 mt-8 flex-col'>
                <a href="https://t.me/Rummy_family"><SubscribeBtn /></a>
                 <a href="https://royally.vip/"><OfficialSiteBtn /></a>
            </div>
            </Offcanvas.Body>
          </Offcanvas>
          </div>
          <div className='w-1/2 border-red-500 items-center flex justify-end'>
          <a href="/"><img src={logo} alt="logo image" className='md:w-36 w-36' /></a>
          </div>
            </div>
        </>
      );
    };

   

export default NavbarMobile;