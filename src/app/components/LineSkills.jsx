"use client";
import Image from "next/image";
import React from "react";

const LineSkills = (props) => {
  const data_animated = true;
  const direction_animated = props.direction;
  const isIcon = props.isIcon;
  const data = props.data;

  return (
    <div
      data_animated={data_animated}
      className={`scroller w-[300px] sm:w-[600px] md:w-[800px] ${
        data_animated ? `overflow-hidden ` : ``
      }`}
    >
      <div
        className={`flex gap-4 py-3 w-max ${
          data_animated
            ? `flex-nowrap  ${
                direction_animated ? `animationReverce` : `scrollAnim`
              }`
            : `flex-wrap`
        }`}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#2d2c35] w-fit h-fit shadow-md py-4 px-5 text-myGreen uppercase rounded-md"
          >
            {isIcon ? (
              <div className="relative w-[50px] h-[50px]">
                <Image src={item} alt="icon" layout="fill" objectFit="contain" />
              </div>
            ) : (
              item
            )}
          </div>
        ))}

        {/* Cloning the data again */}
        {data.map((item, index) => (
          <div
            key={index + 1}
            className="bg-[#2d2c35] w-fit h-fit shadow-md py-4 px-5 text-myGreen uppercase rounded-md"
          >
            {isIcon ? (
              <div className="relative w-[50px] h-[50px]">
                <Image src={item} alt="icon" layout="fill" objectFit="contain" />
              </div>
            ) : (
              item
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineSkills;
