import React from "react";
import bg from "./../assets/frameBgTwo.webp";

const FrameWorkTwo = (props) => {
  return (
    <div className="relative">
      <div className="relative xl:h-[455px] md:h-[530px]">
        <img src={bg} className="h-full" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-full px-16">
        <h4 className="2xl:text-2xl xl:text-[22px] text-[22px] text-center 2xl:py-4">
          {props.heading}
        </h4>
        <p className="text-center text-[16px] opacity-80">{props.para}</p>
      </div>
    </div>
  );
};

export default FrameWorkTwo;
