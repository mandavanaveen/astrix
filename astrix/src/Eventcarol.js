import React from "react";
// import Carol from "./Carol";
import location from "./location.svg";
import eventtime from "./eventtime.svg";
import "./App.css";

function Eventcarol() {
  return (
    <div>
      {/* content for events  */}
      <div className="text-color absolute w-[361px] h-[590px] top-[159px] tracking-[5px] left-[34px] back-text">
        ASTR IX
        <br />
        <br />
        EVE NTS
      </div>

      <div className="">
        <p className="absolute w-[288px] h-[66px] collecheading left-[950px] top-[51px] text-white">
          Explore Youre First Event
        </p>

        <div className="w-[448px] h-[687px] absolute left-[955px] top-[168px]">
          <div className="w-[386px] lexendfont text-white h-[376px] absolute flex flex-col justify-between">
            <div className="w-[316px] h-[302px] justify-between flex flex-col">
              <p className="w-[352px] h-[71px] lexendfont font-extrabold text-[57px] mt-[65px] ml-0 tracking-[-0.25px] leading-[71.25px]">
                Event Name
              </p>
              <div className="w-[379px] h-[28px] flex justify-between">
                <div className="w-[108px] flex justify-between">
                  <img
                    className="w-[27px] h-[27px]"
                    src={location}
                    alt="loc icon"
                  ></img>
                  <p className="lexendfont w-[68px] font-semibold text-[22px] leading-[28px]">
                    Venue
                  </p>
                </div>
                <div className="w-[245px]">
                  <div className="w-[245px] flex justify-between">
                    <img
                      className="w-[27px] h-[27px]"
                      src={eventtime}
                      alt="loc icon"
                    ></img>
                    <p className="lexendfont font-semibold text-[22px] leading-[28px]">
                      04/3/2024 @19:00
                    </p>
                  </div>
                </div>
              </div>
              <p className="w-[316px] h-[104px] font-semibold text-[16px] leading-[24px] tracking-[0.15px]">
                Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi
                et sed ipsum. Pellentesque mattis condimentum ut nulla.
              </p>
            </div>
            <div className="flex gap-[14px]">
              <p className="font-semibold text-[26px] leading-[32.5px]">
                Artist Lineup
              </p>
            </div>
          </div>

          {/* images  */}

          <div className="relative mt-[450px] flex items-center ">
            <img
              className="w-[145px] h-[150px]"
              src="./images/j1.png"
              alt="j1"
            ></img>
            <img
              className="absolute w-[192px] h-[198px] top-[-24px] left-[130px] z-10"
              src="./images/j2.png"
              alt="j2"
            ></img>
            <img
              className="w-[145px] h-[150px]"
              src="./images/j3.png"
              alt="j3"
              style={{ marginLeft: "170px" }}
            ></img>
          </div>

          {/* qrcode image */}

          <img
            className="mt-[115px]"
            alt="qrcode"
            src="./images/qrcode.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Eventcarol;
