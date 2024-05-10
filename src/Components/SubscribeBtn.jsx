import React from 'react';
import useScreenSize from '../hooks/useScreenSize';
import telegramlogo from "./../assets/telgram_logo.png"
const SubscribeBtn = () => {
    const screenSize = useScreenSize()
    return (
        <div className='bg-[#0088cc] 2xl:w-[179px] xl:w-[184px] rounded-[10px] md:p-[23px] p-4 flex gap-[5px] text-white '>
            <img src={telegramlogo} alt="whatsapp icon" />
            {/* <p className={screenSize<="600"?'hidden text-[10px] md:text-[16px]':'text-[10px] md:text-[16px]'}>Subscribe</p> */}
            <p className={screenSize<="600"?' text-[20px] md:text-[16px]':'text-[10px] md:text-[16px]'}>Subscribe</p>
        </div>
    );
};

export default SubscribeBtn;