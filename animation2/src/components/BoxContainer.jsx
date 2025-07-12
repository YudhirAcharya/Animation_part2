import React from "react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

// const images = {
//   viewAll: "src/assets/viewAllCourses.png",
//   icons: "src/assets/icons.png",
//   plus: "src/assets/plus.png",
//   info: "src/assets/allCourses.png",
// };

const boxContents = [
  {
    viewAllImg: "src/assets/viewAllCourses.png",
    iconImg: "src/assets/icons.png",
    number: "23",
    plusImg: "src/assets/plus.png",
    infoImg: "src/assets/allCourses.png",
    infoImg2: "src/assets/allCourses2.png",
  },
  {
    viewAllImg: "src/assets/viewAllCourses.png",
    iconImg: "src/assets/icons.png",
    number: "05",
    plusImg: "src/assets/plus.png",
    infoImg: "src/assets/upcomingCourses.png",
    infoImg2: "src/assets/upcomingCourses2.png",
  },
  {
    viewAllImg: "src/assets/viewAllCourses.png",
    iconImg: "src/assets/icons.png",
    number: "10",
    plusImg: "src/assets/plus.png",
    infoImg: "src/assets/ongoingCourses.png",
    infoImg2: "src/assets/ongoingCourses2.png",
  },
];

const Box = ({ isActive, index, onClick, content }) => {
  const boxRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, {
      flex: isActive ? 3 : 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [isActive]);

  const handleClick = () => {
    gsap.fromTo(
      circleRef.current,
      {
        scale: 0,
        opacity: 1,
        x: -10,
        y: -10,
      },
      {
        x: -530,
        y: 250,
        scale: 10,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onStart: () => onClick(index),
      }
    );
  };

  return (
    <div
      ref={boxRef}
      onClick={handleClick}
      className={`transition-all duration-500 
      ${
        isActive ? "bg-[rgb(195,50,65)]" : "bg-[rgb(249, 235, 236)]"
      } p-4 relative rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between    `}
    >
      <div
        ref={circleRef}
        className="circle  absolute top-2  right-2 w-6 h-6 bg-white rounded-full  origin-top-right "
      ></div>

      {isActive ? (
        <>
          <img
            src={content.viewAllImg}
            className="absolute top-2 right-2 w-20"
          />
          <div className="flex justify-center items-center flex-grow">
            <img src={content.iconImg} className="h-24 object-contain" />
          </div>
          <div className="flex justify-between items-end relative z-50">
            <p className="text-[rgb(195,50,65)] text-7xl font-extrabold relative z-60">
              {content.number}
            </p>
            <img src={content.plusImg} className="h-6 mb-15 -ml-60 " />
            <img src={content.infoImg} className="h-20 object-contain" />
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-end items-center h-full">
          <img src={content.infoImg2} className="h-38 mb-4 object-contain" />
          <div className="flex gap-2 items-center relative z-20">
            <p className="text-white text-2xl font-extrabold relative z-30">
              {content.number}
            </p>
            <img src={content.plusImg} className="h-5" />
          </div>
        </div>
      )}
    </div>
  );
};

const BoxContainer = () => {
  const [activeBox, setActiveBox] = useState(0);
  const boxArr = [0, 1, 2];
  return (
    <div className="gap-4  flex w-full max-w-6xl mx-auto h-[400px] mt-20">
      {boxArr.map((a) => (
        <Box
          key={a}
          index={a}
          isActive={a === activeBox}
          onClick={setActiveBox}
          content={boxContents[a]}
        />
      ))}
    </div>
  );
};

export default BoxContainer;
