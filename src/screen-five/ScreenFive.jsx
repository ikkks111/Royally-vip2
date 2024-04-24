import React from "react";

import useScreenSize from "../hooks/useScreenSize";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import FrameWorkOne from "../Components/FrameWorkOne";
import FrameWorkTwo from "../Components/FrameWorkTwo";
import SwiperFrame from "../Components/SwiperFrame";

const ScreenFive = () => {
  const screenSize = useScreenSize();
  const items = [
    {
      heading: "About Us | Royallyrummy Indian Rummy Game",
      content:
        "Royally Rummy is an online rummy game that combines strategy and skills.We have more than a dozen modes,the game interface is friendly and the operation is simple,allowing you to enjoy the game easily.",
    },
    {
      heading: "Play Responsibly",
      content:
        "We have adopted advanced technologies and strategies",
    },
    {
      heading: "Is it Legal to Play Online Rummy in India?",
      content:
        "The Supreme Court of India confirmed in a 1996 ruling that rummy is a game of skill and is not gambling or a game of chance. Therefore, in India, even the game of rummy played with cash is considered a legal business activity and is protected by Article 19(1)(g) of the Constitution",
    },
    {
      heading: "Full Customer Support",
      content:
        "We offer comprehensive and efficient customer support services, staffed by experienced and professionally trained team members, ensuring effective resolution of various player inquiries and issues.",
    },
  ];
  return (
    <div className="screenfive defslider min-[600px]:pt-24 min-[600px]:px-24 px-2 pt-4 ">
      <div>
        <h3
          className={
            screenSize <= "600"
              ? "text-2xl text-center font-semibold"
              : "text-5xl font-semibold text-center py-3 2xl:px-64 xl:px-28 leading-tight"
          }
        >
          Discover Royal Rummy
        </h3>
        <p className="max-[600px]:text-base max-[600px]:leading-7 text-xl text-center leading-10">
         
        </p>
      </div>
      {screenSize <= "991" ? (
        <div>
          <Swiper
            autoplay={{
              delay: 2500,
            }}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination]}
            className="mySwiper pb-4"
          >
            {items.map((item, index) => (
              <SwiperSlide>
                <SwiperFrame heading={item.heading} content={item.content} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="flex justify-between gap-5 px-10">
          <div className="text-white">
            <FrameWorkOne
              heading={"About Us | Royallyrummy Indian Rummy Game"}
              para={
                "Royally Rummy is an online rummy game that combines strategy and skills.We have more than a dozen modes,the game interface is friendly and the operation is simple,allowing you to enjoy the game easily."
              }
            />

            <FrameWorkTwo
              heading={"Play Responsibly"}
              para={
                "Royally Rummy is an online rummy game that combines strategy and skills.We have more than a dozen modes,the game interface is friendly and the operation is simple,allowing you to enjoy the game easily."
              }
            />
          </div>
          <div className="2xl:pt-48 pt-32">
            <div>
              <FrameWorkOne
                heading={"Is it Legal to Play Online Rummy in India?"}
                para={
                  "The Supreme Court of India confirmed in a 1996 ruling that rummy is a game of skill and is not gambling or a game of chance. Therefore, in India, even the game of rummy played with cash is considered a legal business activity and is protected by Article 19(1)(g) of the Constitution"
                }
              />
            </div>
            <div>
              <FrameWorkTwo
                heading={"Full Customer Support"}
                para={
                  "We offer comprehensive and efficient customer support services, staffed by experienced and professionally trained team members, ensuring effective resolution of various player inquiries and issues."
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenFive;
