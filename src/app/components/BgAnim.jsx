import React from "react";

const BgAnim = () => {
  return (
    <div className="anim-holder w-full h-full absolute top-0 left-0 grid grid-cols-4 -z-10">
      <div className="bg-myBlack animationStart"></div>
      <div
        className="bg-myBlack animationStart"
        style={{ animationDelay: "100ms" }}
      ></div>
      <div
        className="bg-myBlack animationStart"
        style={{ animationDelay: "200ms" }}
      ></div>
      <div
        className="bg-myBlack animationStart"
        style={{ animationDelay: "300ms" }}
      ></div>
    </div>
  );
};

export default BgAnim;
