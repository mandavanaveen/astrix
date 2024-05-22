import React from "react";

// same data for all container elements

const data = [
  {
    year: "2024",
    by: "by",
    pablo: "Pablo",
    collection: "Collectible Name",
    image: "./images/sameimage.png",
  },
  {
    year: "2024",
    by: "by",
    pablo: "Pablo",
    collection: "Collectible Name",
    image: "./images/sameimage.png",
  },
  {
    year: "2024",
    by: "by",
    pablo: "Pablo",
    collection: "Collectible Name",
    image: "./images/sameimage.png",
  },
];

function Collectible() {
  return (
    <div className="relative top-[462px] flex w-[448px] h-[225px] gap-[16.92px] overflow-hidden">
      <div className="flex gap-[16.92px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-[164.08px] h-[224.56px] bg-[#B9A0FF] rounded-[8.96px]"
          >
            <p className="w-[29.68px] h-[9.52px] absolute top-[10.64px] interfont font-bold bg-black text-white flex justify-center text-[6.72px] left-[10.08px] leading-[8.13px] rounded-[8.96px]">
              {item.year}
            </p>
            <p className="w-[33px] h-[9px] absolute top-[10.64px] left-[120.96px]  interfont font-medium text-[7.84px] text-black">
              {item.by}
              <span className="font-semibold"> {item.pablo}</span>
            </p>
            <p className="w-[94px] h-[14px] lexendfont font-medium text-[11.2px] leading-[14px] absolute top-[29.68px] left-[35.27px] text-black">
              {item.collection}
            </p>
            <img
              className="w-[143.92px] h-[164.08px] absolute top-[50.05px] left-[10.08px] rounded-[8.96px] border-[0.56px] border-black"
              src={item.image}
              alt={`slideimage${index}`}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collectible;
