import React from "react";
import useScreenSize from "../hooks/useScreenSize";
import screenBg from "./../assets/5_screen_background.png";
import mobileScreenBg from "./../assets/mobile/mobile_5 screen background.png";
import golden from "./../assets/golden.png";
import impor from "./../assets/import.png";

const ScreenSix = () => {
  const screenSize = useScreenSize();
  return (
    <div className="relative screensix">
      <img
        src={screenSize <= "992" ? mobileScreenBg : screenBg}
        width={"100%"}
      />
      <div
        className={
          screenSize <= "992"
            ? "absolute top-[23%] text-white mx-4 bg-gradient-to-b from-[#211f1f] to-[#424141] rounded-[10px] p-4"
            : "absolute 2xl:top-60 top-36 w-[600px] ps-[100px] text-white"
        }
      >
        <h2 className="md:text-4xl text-2xl font-semibold">
        Welocome to Royally Rummy-the thrilling online game for real money!
        </h2>
        <p className="2xl:text-xl md:text-lg text-sm p-2 leading-10 opacity-50 mt-4">
          Explore our stunning game interface and various modes tailored to satisfy different gaming preferences.Download the game today and earn massive rewards!
        </p>
        <a href="https://xjpossmm02.ccverdcfm.com/RoyallyRummy-APK/royallyrummy-channel-30772988.apk">
          <button className="md:-ml-[100px]  -mt-7 w-full">
            <img src={golden} alt="" className="w-full mx-auto" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ScreenSix;
