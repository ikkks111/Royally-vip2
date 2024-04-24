import React from "react";
import bg from "./../assets/mobile/mobile_bg.png";
import useScreenSize from "../hooks/useScreenSize";

const SwiperFrame = (props) => {
  const screenSize = useScreenSize();
  return (
    <div className="relative">
      <div className="flex justify-center">
        <img src={bg} alt="" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-[250px] lg:max-w-[100%]">
        <h4
          className={
            screenSize == "390"
              ? "text-base font-semibold py-3"
              : "text-base font-semibold pb-3"
          }
        >
          {props.heading}
        </h4>
        <p
          className={
            screenSize == "390"
              ? "text-[14px] leading-[22px] px-4 opacity-80"
              : "text-[12px] leading-[18px] opacity-80"
          }
        >
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default SwiperFrame;
