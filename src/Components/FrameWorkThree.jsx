import React from "react";
import bg from "./../assets/frameBgThree.png";
import useScreenSize from "../hooks/useScreenSize";

const FrameWorkThree = (props) => {
  const screenSize = useScreenSize();
  return (
    <div
      className="text-white font-medium h-[690px] md:h-auto bg-cover lg:bg-contain"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="px-[80px] md:px-[38px] py-[280px] flex flex-col justify-center items-center">
        <img src={props.icon} alt="" width={"56px"} height={"56px"} />
        <h4 className="text-[20px] text-center pb-[15px] pt-[10px]">
          {props.heading}
        </h4>
        <p className="text-[12px] text-center opacity-50">{props.para}</p>
      </div>
    </div>
  );
};

export default FrameWorkThree;
