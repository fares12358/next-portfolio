import React from "react";

const Experience = (props) => {
  const timingDelay=[["0.5s","0.6s","0.7s"],["0.0s","0.1s","0.3s"]]
  return (
    <div className="text-white p-5 flex flex-col justify-center items-center text-center md:text-left md:items-start">
      <h1 className="md:text-5xl text-4xl font-bold my-5 opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: `${timingDelay[props.indexD][0]}` }}>Experience</h1>
      <p className="text-neutral-500 font-semibold md:text-lg text-sm opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: `${timingDelay[props.indexD][1]}` }}>
        I started learning front-end development in 2021 and have been
        continuously practicing and improving my coding skills. I am dedicated
        to enhancing my abilities in coding and organizing my work to produce
        high-quality
      </p>
      <div className="bg-[#28272c] md:w-[300px] w-[200px]  h-[100px] my-10 rounded-md flex items-start  justify-center p-4 opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: `${timingDelay[props.indexD][2]}` }}>
        <span className="text-myGreen ">2021-2024</span>
      </div>
    </div>
  );
};

export default Experience;
