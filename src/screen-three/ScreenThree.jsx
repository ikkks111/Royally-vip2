import React from "react";
import useScreenSize from "../hooks/useScreenSize";
import screenThree from "./../assets/3_screen_background.png";
import mobileScreenThree from "./../assets/mobile/mobile_3 screen background.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FrameWorkThree from "../Components/FrameWorkThree";
import iconOne from "./../assets/directbox-receive.png";
import iconTwo from "./../assets/cup.png";

const ScreenThree = () => {
  const screenSize = useScreenSize();
  const responsive = {
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="screenthree defslider relative">
      <img
        src={screenSize <= "600" ? mobileScreenThree : screenThree}
        alt="screen three background image"
        className="w-full"
      />
      {screenSize <= "600" ? (
        <div className="absolute top-80 w-full">
          <Carousel responsive={responsive} showDots={true} swipeable={true}>
            <FrameWorkThree
              heading={"Over 50 million downloads"}
              para={
                "Join millions of players in an epic adventure of strategy and fantasy. Your actions will bring tangible rewards"
              }
              icon={iconOne}
            />
            <FrameWorkThree
              heading={"Make money every day"}
              para={
                "Royal Rummy - the Arena of Fortune. Challenge other players, show off your poker skills and win rich rewards every game"
              }
              icon={iconTwo}
            />
            <FrameWorkThree
              heading={"Guaranteed 100% fast withdrawal"}
              para={
                "We use SSL encryption technology to protect players' funds and have first-class anti-fraud detection."
              }
              icon={iconOne}
            />
          </Carousel>
        </div>
      ) : (
        <div className="xl:absolute 2xl:top-24 top-0 left-16 lg:flex gap-5 lg:w-2/3">
          <div className="lg:pt-20 flex-1">
            <FrameWorkThree
              heading={"Over 50 million downloads"}
              para={
                "Join millions of players in an epic adventure of strategy and fantasy. Your actions will bring tangible rewards"
              }
              icon={iconOne}
            />
          </div>
          <div className="lg:pt-44 flex-1">
            <FrameWorkThree
              heading={"Make money every day"}
              para={
                "Royal Rummy - the Arena of Fortune. Challenge other players, show off your poker skills, win rich rewards every game"
              }
              icon={iconTwo}
            />
          </div>
          <div className="flex-1">
            <FrameWorkThree
              heading={"Guaranteed 100% fast withdrawal"}
              para={
                "We use SSL encryption technology to protect players' funds and have first-class anti-fraud detection."
              }
              icon={iconOne}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenThree;
