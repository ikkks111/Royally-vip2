import React from "react";
import screenOne from "../assets/section_one_bg.webp";
import mobileScreenOne from "../assets/mobile/mobile_1screen_background.webp";
import Navbar from "../Components/Navbar";
import bonus from "./../assets/bonus.webp";
import mobileBonus from "../assets/mobile/mobile_bonus.webp";
import android from "./../assets/android_download.webp";
import ios from "./../assets/ios_download.webp";
import model from "./../assets/hug.webp";
import useScreenSize from "../hooks/useScreenSize";
import NavbarMobile from "../Components/NavbarMobile";

const ScreenOne = () => {
  const screenSize = useScreenSize();
  return (
    <div className="screenone relative">
      <div className="absolute left-0 right-0 z-10 mt-2 md:mt-10">
      {screenSize <= 1000 ? <NavbarMobile/> : <Navbar/>}
      </div>
      <img
        src={screenSize <= 600 ? mobileScreenOne : screenOne}
        alt="image of screen one"
        className="w-full h-full mobile-bg"
        style={screenSize <= 600 ? { width: "406px", height: "970px" } : {}}
      />
      <div
        className={
          screenSize <= "600"
            ? "absolute z-10 2xl:top-[140px] top-[70px] md:top-[110px]"
            : "absolute 2xl:top-[140px] top-[70px] md:top-[110px] w-[50%] left-16"
        }
      >
        <img
          src={screenSize <= "600" ? mobileBonus : bonus}
          alt="bonus image"
          className={screenSize <= "600" ? "w-full px-5 mt-7" : ""}
        />
        {screenSize <= "600" ? (
          <p className="p-[10px] rounded-[10px] bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(25,25,25,0.5)] text-white text-[10px] text-center opacity-50 leading-[15px] mt-5 mx-5">
            THIS GAME MAY BE HABIT-FORMING OR FINANCIALLY RISKY. PLAY
            RESPONSIBLY. T&C APPLY
          </p>
        ) : (
          <></>
        )}
        {screenSize <= "600" ? (
          <div className="md:mt-[72%] mt-[130%] flex flex-col gap-0 items-center justify-center">
            <img src={model} alt="" className="h-16 mx-auto" />
            <a href="https://xjpossmm02.ccverdcfm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
              <button className="w-full mx-auto">
                <img
                  src={android}
                  alt="android download btn"
                  className="-my-5"
                />
              </button>
            </a>
            <a href="https://xjpossmm02.ccverdcfm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
            {screenSize > 600 &&
              <button>
                <img src={ios} alt="android download btn" className="-my-5" />
              </button>
}
            </a>
          </div>
        ) : (
          <div className="flex items-center justify-center -ml-5 mt-6 2xl:mt-16">
            <a href="https://xjpossmm02.ccverdcfm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
              <button className="2xl:min-w-[375px]">
                <img src={android} alt="android download btn" />
              </button>
            </a>
            <a href="https://www.youtube.com/watch?v=A_Ta0hi6ul4"><img src={model} alt=""  className="min-w-[50px] md:min-w-[90px]" /></a>
            <a href="https://xjpossmm02.ccverdcfm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
              <button className="2xl:min-w-[375px]">
                <img src={ios} alt="android download btn" />
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenOne;
