"use client";
import React, { useState } from "react";
import BgAnim from "../components/BgAnim";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import About from "../components/About";
const page = () => {
  const [component, setComponent] = useState(<Experience />);
  const [mark, setMark] = useState(1);
  const getComponent = (e) => {
    event.preventDefault();
    console.log(e);
    if (e === 1) {
      setComponent(<Experience />);
      setMark(1);
    } else if (e === 2) {
      setComponent(<Education />);
      setMark(2);
    } else if (e === 3) {
      setComponent(<Skills />);
      setMark(3);
    } else {
      setComponent(<About />);
      setMark(4);
    }
  };
  return (
    <section className=" w-full h-[calc(100%-80px)] bg-transparent grid xl:grid-cols-3 grid-cols-1 md:p-20 py-20 px-0 ">
      <BgAnim />
      <div className="flex flex-col items-center justify-around h-[350px] text-white font-bold mb-10">
        <div
          className={`shadow-my  md:text-xl text-base md:px-15 px-2 py-4 rounded-md w-[250px] flex items-center justify-center cursor-pointer opacity-0 translate-y-3 anim-view relative ${mark == 1 ? 'bg-myGreen text-black' : 'bg-myBlack text-white'}`}
          style={{ animationDelay: "0.6s" }}
          onClick={() => getComponent(1)}
        >
          Experience
        </div>
        <div
          className={`shadow-my  md:text-xl text-base md:px-15 px-2 py-4 rounded-md w-[250px] flex items-center justify-center cursor-pointer opacity-0 translate-y-3 anim-view relative ${mark == 2 ? 'bg-myGreen text-black' : 'bg-myBlack text-white'}`}
          style={{ animationDelay: "0.7s" }}
          onClick={() => getComponent(2)}
        >
          Education
        </div>
        <div
          className={`shadow-my  md:text-xl text-base md:px-15 px-2 py-4 rounded-md w-[250px] flex items-center justify-center cursor-pointer opacity-0 translate-y-3 anim-view relative ${mark == 3 ? 'bg-myGreen text-black' : 'bg-myBlack text-white'}`}
          style={{ animationDelay: "0.8s" }}
          onClick={() => getComponent(3)}
        >
          Skills
        </div>
        <div
          className={`shadow-my  md:text-xl text-base md:px-15 px-2 py-4 rounded-md w-[250px] flex items-center justify-center cursor-pointer opacity-0 translate-y-3 anim-view relative ${mark == 4 ? 'bg-myGreen text-black' : 'bg-myBlack text-white'}`}
          style={{ animationDelay: "0.9s" }}
          onClick={() => getComponent(4)}
        >
          About me
        </div>
      </div>
      <div className="col-span-2 py-5">{component}</div>
    </section>
  );
};

export default page;
