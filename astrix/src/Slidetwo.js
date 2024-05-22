import React, { useState, useRef } from "react";
import yellow from "./yellow.svg";
import asterik from "./asterik.svg";
import "@fontsource/inter";
import "@fontsource/lexend";
import "@fontsource/krona-one";
import "./App.css";
import Eventcarol from "./Eventcarol";
import Carol from "./Carol";
import Colleccarol from "./Colleccarol";

function Slidetwo() {
  const [toggleCol, setToggleCol] = useState(1);
  const containerRef = useRef(null);

  const handleToggle = (value) => {
    setToggleCol(value === "Events" ? 0 : 1);
  };

  return (
    <div className=" absolute w-[1440px] h-[1024px] secolor">
      <img
        className="absolute w-[60px] h-[60px] top-[15px] left-[15.54px]"
        src={yellow}
        alt="logo"
      ></img>
      <h1 className="absolute secastrix w-[163px] h-[64px] left-[89px] top-[23px] text-4xl tracking-[-0.25px] text-yellow-400">
        Astrix.
      </h1>

      <div>
        {/* toggle handling for events and collections */}

        <div className="w-[330.46px] bg-custom-color rounded-full flex text-white h-[52.71px] absolute left-[39px] top-[919px]">
          <div className="relative inline-flex items-center cursor-pointer w-[330.46px] h-[52.71px] bg-[#282B30] rounded-full">
            <input
              type="checkbox"
              className="sr-only"
              checked={toggleCol}
              readOnly
            />
            <div
              className={`absolute top-0 left-0 h-[52.71px] w-[163.56px] bg-[#484E56] rounded-full transition-transform duration-500 ${
                toggleCol ? "transform translate-x-[166.9px]" : ""
              }`}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-between">
              <span
                className="w-[163.56px] h-[52.71px] flex justify-center items-center z-10"
                onClick={() => handleToggle("Events")}
              >
                Events
              </span>
              <span
                className="w-[163.56px] h-[52.71px] flex justify-center items-center z-10"
                onClick={() => handleToggle("Collections")}
              >
                Collections
              </span>
            </div>
          </div>
        </div>

        {/* courosel or both events and collections */}

        <Carol key={toggleCol} toggleCol={toggleCol} />

        {/* join waitlist button*/}

        <button className="w-[194px] h-[52px] lexendfont font-bold rounded-[40px] bg-[#FFCA5F] absolute top-[937px] left-[1195px] ">
          Join Waitlist
        </button>
      </div>

      {/* toggle button handle the content will change based on selection, but it has keft default for collections  */}

      {toggleCol === 0 ? <Eventcarol /> : <Colleccarol />}

      {/* this is the vertical ticker  */}

      <div className="absolute h-[91px] w-[1025px] left-[340px] top-[466.7px] rotate-90 bg-purple-300 z-10">
        <div
          className="h-full overflow-hidden"
          style={{ maxHeight: "100%" }}
          ref={containerRef}
        >
          <p className="flex animatebar animate-ticker text-[24px] font-bold w-max pt-7 ">
            Event: Oasis Bus tour, JLN Stadium, Delhi
            <img src={asterik} alt="asterisk" className="mx-12" />
            Collection Live: Meta Lives, live on asterisk
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slidetwo;
