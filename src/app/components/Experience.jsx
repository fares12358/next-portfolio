import React from "react";
const Experience = (props) => {
  const timingDelay = [["0.5s", "0.6s", "0.7s"], ["0.0s", "0.1s", "0.3s"]]
  return (
    <div className="text-white p-5 flex flex-col justify-center items-center text-center md:text-left md:items-start">
      <h1 className="md:text-5xl text-4xl font-bold my-5 opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: `${timingDelay[props.indexD][0]}` }}>Experience</h1>
      <p className="text-neutral-500 font-semibold md:text-lg text-sm opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: `${timingDelay[props.indexD][1]}` }}>
        I started learning front-end development in 2022 and have been
        continuously practicing and improving my coding skills. I am dedicated
        to enhancing my abilities in coding and organizing my work to produce
        high-quality
      </p>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex items-center gap-2 justify-center md:justify-start text-xl font-bold text-myGreen opacity-0 translate-y-3 anim-view relative"
          style={{ animationDelay: `${timingDelay[props.indexD][2]}` }}>
          Front End Developer / 2022 - 2024
        </div>
        <div className="flex items-center gap-2 justify-center md:justify-start text-xl font-bold  text-myGreen opacity-0 translate-y-3 anim-view relative"
          style={{ animationDelay: `${timingDelay[props.indexD][2]}` }}>
          MERN Stack Developer / 2024 - 2025
        </div>
      </div>
    </div>
  );
};
export default Experience;
