import React from 'react'
import useScreenSize from '../hooks/useScreenSize';
import Footer from '../footer/Footer'
import Navbar from '../Components/Navbar'
import NavbarMobile from '../Components/NavbarMobile'
const Contact = () => {
       const screenSize = useScreenSize();
  return (
       <>
    <div className='screenseven flex flex-col justify-center items-center'>
    <div className="w-full bg-[#040055] flex-row justify-center items-center py-2">
    {screenSize <= 1000 ? <NavbarMobile/> : <Navbar/>}
      </div>
        <div className='container py-4 mt-6 px-3 lg:px-0'>
       <div className=' bg-[#040055] text-white py-5 rounded-lg w-full flex items-center justify-center'>
       <h1 className='text-[20px] lg:text-[24px] font-bold pl-5 lg:pl-0 '>Contact Us</h1>
       </div>
        <h2 className='text-[18] lg:text-[20px] mt-4 py-4 font-bold text-left'>We're Here to Help</h2>
       <p className='py-4'>At Royally Rummy, our mission is to provide unparalleled Royally Rummy experiences tailored to your needs. We know that the implementation of exceptional Rummy 51 Bonus or a wonder vacation needs extremely careful dealing, following the specifications of every human being. It is the reason we continue to emphasise open and responsive communication that precisely elucidates and updates the entire process.
</p>
       <h2  className='text-[18] lg:text-[20px] py-4 font-bold text-left'>Seamless Rummy Royal Download
</h2>
       <p className='py-4'>The Royal Rummy app offers a seamless and immersive gaming experience on your mobile device. Royal Rummy apk download can be done by our official Royally Rummy website or from trusted sources to enjoy a user-friendly interface, smooth gameplay, and easy access to thrilling rummy tournaments and cash games anytime, anywhere.</p>
       <h2 className='text-[18] lg:text-[20px] py-4 font-bold text-left'>Get in Touch</h2>
       <p className='py-4'>The need for targeted information about Royally Rummy, desired recommendations or even planning a tailored-made package that our reliable staff is always ready to support you. We are available via contact forms, live chat, and other channels, and we will get back to you in the shortest possible time.</p>
        <h2 className='text-[18] lg:text-[20px] py-4 font-bold text-left'> Call Us</h2>
       <p className='py-4'>If you have any problem regarding Rummy royal online, Speak directly with one of our friendly representatives by giving us a call.
</p>
<span>
Contact – 
            <a href="https://t.me/Rummy_family" className='text-[#040055] font-bold'>Chat On Telegram</a>

           </span>
        <h2 className='text-[18] lg:text-[20px] py-4 font-bold text-left'>Send an Email
</h2>
        <p className='py-4'>If you prefer written communication, feel free to drop us an email about your experience or Rummy royal download at:</p>
        <span>
        Email –royallyrummysocial@gmail.com

           </span>
           <h2 className='text-[18] lg:text-[20px] py-4 font-bold text-left'>We Value Your Feedback
</h2>
<p className='py-4'>As the Top rummy Bonus App, We remain true to our clients as we guarantee their satisfaction is our focus. It would also be nice if you could spice up your feedback, recommend new ways of thinking, or point out our current drawbacks so we can improve on them. The ways you can provide us with your suggestions about Royally Rummy would be the above contact methods, don't hesitate to ask any of them.</p>
        <p className='py-4'>We look forward to hearing from you and creating unforgettable Rummy Royal experiences together.</p>
        </div>
        </div>
         </>
  )
}

export default Contact