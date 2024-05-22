import React from "react";
import Collectible from "./Collectible";
// import Carol from "./Carol";
import profileicons from "./profileicons.svg";

function Colleccarol() {
  return (
    <div className="  ">
      {/* collections content */}

      <div className="text-color absolute w-[361px] h-[708px] top-[159px] tracking-[5px] left-[34px]">
        ASTR IX
        <br />
        <br />
        COLL ECTI BLE
      </div>
      <p className="absolute w-[341px] h-[66px] collecheading left-[992px] top-[51px] z-30 text-white">
        Explore Your First Collectible
      </p>

      <div className="w-[448px] h-[687px] absolute left-[992px] top-[168px]">
        <div className="w-[386px] lexendfont text-white h-[376px] absolute flex flex-col justify-between">
          <div className="w-[316px] h-[302px] justify-between flex flex-col">
            <p className="w-[300px] h-[142px] font-extrabold text-[57px] tracking-[-0.25px] leading-[64px]">
              Meta <br /> Lives
            </p>
            <p className="w-[255px] h-[32px] font-bold text-[24px] leading-[32px]">
              Live in Astrix
            </p>
            <p className="w-[316px] h-[104px] font-semibold text-[16px] leading-[24px] tracking-[0.15px]">
              Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
              sed ipsum. Pellentesque mattis condimentum ut nulla.
            </p>
          </div>
          <div className="flex gap-[14px]">
            <img src={profileicons} alt="social profile" />
            <p className="font-medium text-xl leading-[44px]">
              22k people interested
            </p>
          </div>
        </div>
        <p className="absolute lexendfont top-[427px] w-[81px] h-[18px] text-white font-semibold text-sm leading-[17.5px]">
          Collectibles
        </p>

        {/* Collectible components is data mapped using map function */}

        <Collectible />
      </div>
    </div>
  );
}

export default Colleccarol;
