import React, { useState, useEffect } from "react";
import "./App.css";
import location from "./location.svg";

// here the middle content of 2nd component where images are scrolling

export default function Carol({ toggleCol }) {
  const data = [
    { src: "./images/cp1.png", src1: "./images/cp5.png" },
    { src: "./images/cp2.png", src1: "./images/cp6.png" },
    { src: "./images/cp3.png", src1: "./images/cp7.png" },
    { src: "./images/cp4.png", src1: "./images/cp8.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // image effect for 2000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [data.length]);

  const offset = 550;

  return (
    <div className="absolute w-[1158px] h-[713px] top-[142px] left-[-288px] z-10">
      {toggleCol === 1 ? (
        <h1 className="flex flex-col items-center justify-end lexendfont w-full h-[63px] top-[32px] pl-32 text-2xl font-bold leading-7 text-white">
          Lunar Palace:
          <br />
          <span className="">(ft. Kanye west)</span>
        </h1>
      ) : (
        <div className="mt-4">
          <br />
          <br />
        </div>
      )}
      <div className="relative mt-5 overflow-hidden">
        <div
          className="flex transition-transform gap-[27px] duration-500"
          style={{
            transform: `translateX(calc(-${
              currentIndex * 412
            }px + ${offset}px))`,
          }}
        >
          {data.map((slide, index) => (
            <div key={index} className="relative flex-shrink-0">
              <div
                className="gradient-overlay"
                style={{ display: index !== currentIndex ? "block" : "none" }}
              ></div>
              <img
                src={!toggleCol ? slide.src1 : slide.src}
                alt={`slideimage${index}`}
                className="w-[412px] h-[630px] object-cover"
              />
              {toggleCol === 0 && index !== currentIndex && (
                <div
                  className={`absolute bottom-0 mb-20 ml-8 text-white 
                  }`}
                >
                  <div className="w-[184px] h-[113px]">
                    <p className="h-[58px] w-[284px] lexendfont font-bold text-[46px] my-[45px] leading-[57.5px]">
                      Event Name
                    </p>
                    <div className="flex gap-4">
                      <img
                        className="w-[27px] h-[27px]"
                        src={location}
                        alt="loc icon"
                      />
                      <p className="lexendfont w-[87px] h-[25px] font-semibold text-[22px] leading-[28px]">
                        Location
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
