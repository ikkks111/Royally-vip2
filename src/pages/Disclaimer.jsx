import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../Components/Navbar'
import useScreenSize from '../hooks/useScreenSize';
import NavbarMobile from '../Components/NavbarMobile';
const Disclaimer = () => {
       const screenSize = useScreenSize();
  return (
   <>
    <div className='screenseven py-4 flex flex-col justify-center items-center'>
    <div className="w-full bg-[#040055] flex-row justify-center items-center py-2">
    {screenSize <= 1000 ? <NavbarMobile/> : <Navbar/>}
      </div>
        <div className='container py-4 mt-6 px-3 lg:px-0'>
       <div className=' bg-[#040055] text-white py-5 rounded-lg w-full flex items-center justify-center'>
       <h1 className='text-[20px] lg:text-[24px] font-bold pl-5 lg:pl-0 '>Disclaimer</h1>
       </div>
       <p className='py-4 mt-4'>Welcome to our website. This website only serves as a platform for providing information about Royal Rummy. Please note that we are not involved in the development, operation or related businesses of the game and have no direct or indirect connection.<br/><br/>

All content provided on this website, including but not limited to images, videos and text, is for promotional and information-sharing purposes only. We are not involved in the development, operation or any form of commercial activities of the game, and are not responsible for the quality, safety of the game or any problems you may encounter while using the game.<br/><br/>

If you encounter any issues with the game or need assistance, we encourage you to contact Royal Rummy’s official customer service team directly. They can provide professional support and solutions to ensure your gaming experience is as smooth as possible.<br/><br/>

We strive to ensure that the content of the website is accurate and updated, but we do not guarantee its completeness or timeliness. Our website accepts no liability for any loss or damage of any kind incurred as a result of the use of or reliance on any website content.<br/><br/>

Please ensure that you comply with all applicable laws and regulations when using Royal Rummy and assume your own responsibility.<br/><br/>

Thank you for your understanding and support.</p>

        {/* <h2 className='text-[18] lg:text-[20px] mt-4 py-4 font-bold text-left'>Disclaimers for Royally VIP</h2>
       <p className='py-4'>All the information on this website - Royally Rummy - is published in good faith and for general information purpose only. Royally VIP does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Royally VIP), is strictly at your own risk. Royally VIP will not be liable for any losses and/or damages in connection with the use of our website.
</p>
<p className='py-4'>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>
       <p className='py-4'>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>
       <h2  className='text-[18] lg:text-[20px] py-4 font-bold text-left'>Consent
</h2>
       <p className='py-4'>By using our website, you hereby consent to our disclaimer and agree to its terms.
</p>
       <h2 className='text-[18] lg:text-[20px] py-4 font-bold text-left'>Update</h2>
       <p className='py-4'>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p> */}
  
        </div>
       
        </div>
         </>
  )
}

export default Disclaimer