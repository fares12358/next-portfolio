import React from "react";

const Education = () => {
  return (
    <div className="text-white p-5 flex flex-col justify-center items-center text-center md:text-left md:items-start">
      <h1 className="md:text-5xl text-4xl font-bold my-5 opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "0.4s" }}>Education</h1>
      <p className="text-neutral-500 font-semibold md:text-lg text-sm opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "0.5s" }}>
        I am currently a second-year student at New Cairo Technology College,
        specializing in Information Technology (IT) as a software developer
      </p>
      <div className=" w-full my-10 rounded-md grid md:grid-cols-2 grid-cols-1 gap-5 p-4">
        <div className="bg-[#28272c] p-5 rounded-lg flex flex-col opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "0.6s" }}>
          <span className="text-myGreen my-4 font-bold">2021-2022</span>
          <p>
            Study the basic principles of programming languages using Python, C,
            and C++
          </p>
        </div>
        <div className="bg-[#28272c] p-5 rounded-lg flex flex-col opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "0.7s" }}>
          <span className="text-myGreen my-4 font-bold">2022-2024</span>
          <p>
          Study the front-end and learn the programming languages html, css, and js
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
