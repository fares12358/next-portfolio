import React from "react";
const Education = () => {
  return (
    <div className="text-white p-5 flex flex-col justify-center items-center text-center md:text-left md:items-start">
      <h1 className="md:text-5xl text-4xl font-bold my-5 opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "0.0s" }}>Education</h1>
      <p className="text-neutral-500 font-semibold md:text-lg text-sm opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "0.1s" }}>
        I am currently a second-year student at New Cairo Technology College,
        specializing in Information Technology (IT) as a software developer
      </p>
      <div className=" text-myGreen font-bold w-full my-10 flex flex-col justify-start items-start gap-5">
        <div className="opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "0.2s" }}>
          <p>
            2021-2022 /
            Study the basic principles of programming languages using Python, C,
            and C++
          </p>
        </div>
        <div className="text-myGreen font-bold flex flex-col opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "0.3s" }}>
          <p>
          2022-2024 / 
          Study the front-end and learn the programming languages html, css, js <span className="text-myGreen">....etc </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Education;
