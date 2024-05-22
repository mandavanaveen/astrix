import React from "react";
import astrix from "./astrix.svg";
// import line1 from "./images/1line1.png";
import "@fontsource/space-grotesk";
import "@fontsource/lexend";
import "./App.css";
import { useState, useEffect } from "react";

function Slideone({ handleClick }) {
  const [value, setValue] = useState("1");

  // use effect for image animation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) => (prevValue === "1" ? "2" : "1"));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      onClick={handleClick}
      className="w-[1440px] h-[1080px] bg-[rgba(255,244,223,1)]"
    >
      <div className="absolute flex mt-[88px] w-[406px] h-[50.94px] ml-[50px] gap-[20px]">
        <img
          className="w-[48px] h-[39.22px] border-opacity-10"
          src={astrix}
          alt="logo"
        ></img>

        <h1 className="spacefont w-[139px] h-[31px] font-bold text-4xl absolute ml-[76.95px]">
          Astrix.
        </h1>
      </div>
      {/* text and images in first component */}
      <div className="flex flex-col lexfont justify-between absolute w-[1009px] h-[521px] top-[279px] left-[216px] p-0">
        <div className="flex align-center gap-[11px] w-full ">
          <p className=" c2 w-[104px] h-[44px]">WE</p>
          <img
            alt="logos"
            src="./images/1line1.png"
            className={`h-[61px] object-none transition-width duration-[2000ms] ${
              value === "1" ? "w-[276px]" : "w-[371px]"
            }`}
          />
          <p className="c2 w-[501px] h-[44px]">ORGANIZE THE</p>
        </div>

        <div className="flex align-center gap-[11px] w-full">
          <p className="c2 w-[453px] h-[44px]">CONNECTION</p>
          <img
            alt="logos"
            src="./images/2line1.png"
            className={`h-[61px] object-cover transition-width duration-[2000ms] ${
              value === "1" ? "w-[391px]" : "w-[539px]"
            }`}
          ></img>
        </div>

        <div className="flex align-center gap-[11px] w-full">
          <img
            alt="abc"
            src="./images/3line1.png"
            className={`h-[61px] object-none transition-width duration-[2000ms] ${
              value === "1" ? "w-[341px]" : "w-[260px]"
            }`}
          ></img>
          <p className="c2 w-[319px] h-[44px]">BETWEEN</p>
          <img
            alt="orange"
            src="./images/3line2.png"
            className="w-[167px] h-[74px] object-none"
          ></img>
          <p className="c2 w-[219px] h-[44px]">MUSIC</p>
        </div>

        <div className="flex align-center gap-[11px] w-full">
          <p className="c2 w-[238px] h-[44px]">ARTIST</p>
          <img
            alt="green"
            src="./images/4line1.png"
            className={`h-[61px] object-none transition-width duration-[2000ms] ${
              value === "1" ? "w-[203px]" : "w-[299px]"
            }`}
          ></img>
          <p className="c2 w-[296px] h-[44px]">CULTURE</p>
          <img
            alt="best"
            src="./images/4line2.png"
            className={`h-[61px] object-none transition-width duration-[2000ms] ${
              value === "1" ? "w-[307px]" : "w-[137px]"
            }`}
          ></img>
        </div>

        <div className="flex align-center gap-[11px] w-full">
          <img
            alt="blue"
            src="./images/5line1.png"
            className={`h-[61px] object-none transition-width duration-[2000ms] ${
              value === "1" ? "w-[227px]" : "w-[158px]"
            }`}
          ></img>
          <p className="c2 w-[127px] h-[44px]">ART</p>
          <img
            alt="red"
            src="./images/5line2.png"
            className="w-[157px] h-[61px] object-none"
          ></img>
          <p className="c2 w-[635px] h-[44px]">& COLLECTIONS</p>
        </div>
      </div>
    </div>
  );
}

export default Slideone;
