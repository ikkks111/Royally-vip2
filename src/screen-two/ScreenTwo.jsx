import React from 'react';
import impor from "./.././assets/import.webp";
import silver from "./.././assets/3dsilver.webp";
import samsung from "./../assets/Samsung _Galaxy_S22.webp";
import useScreenSize from '../hooks/useScreenSize';

const ScreenTwo = () => {
    const screenSize = useScreenSize();

    return (
        <div className='md:flex items-center justify-between gap-1 md:ps-[100px] screentwo'>
            <div className='md:w-3/4 2xl:w-1/2 max-[600px]:w-full max-[600]:px-3 pl-[10px]'>
                <h1 className='2xl:text-4xl 2xl:pr-16 pr-5 text-3xl font-semibold mb-[10px] text-start'>Play Royally Rummy & Earn Real Cash</h1>
                <p className='text-[16px] leading-10 mb-10 text-start'>
                    Download our Royally Rummy for safe and responsible gaming anytime, anywhere. It’s a subsidiary of Royally Rummy. Start playing now!
                </p>
                <a href="https://xjpossmm02.ccverdcfm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
                    <div className='w-64 relative' style={{ backgroundImage: `url(${silver})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                        <button className='flex gap-[10px] py-[18px] px-[29px]'><span><img src={impor} alt="import icon" /></span> DOWNLOAD APP</button>
                    </div>
                </a>
            </div>
            <div>
                <img src={samsung} alt="image of samsung galaxy s22" className='w-full' style={{ display: 'block' }} />
            </div>
        </div>
    );
};

export default ScreenTwo;
