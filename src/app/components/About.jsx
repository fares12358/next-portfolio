import React from "react";
const About = () => {
  return (
    <div className="text-white p-5 flex flex-col justify-center items-center text-center md:text-left md:items-start">
      <h1 className="md:text-5xl text-4xl font-bold my-5 opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "0.0s" }}>About me</h1>
      <p className="text-neutral-500 font-semibold md:text-lg text-sm opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "0.1s" }}>

        I am Fares, a passionate front-end developer with a strong foundation in
        HTML, CSS, JavaScript, and Bootstrap. Currently, I am a third-year
        student at New Cairo Technology university, specializing in Information
        Technology (IT) as a software developer. My journey in front-end
        development began in 2022, and since then, I have been committed to
        honing my skills and expanding my knowledge in web development. I have a
        keen interest in creating interactive and user-friendly web
        applications. My skills include working with React to build modern web
        applications, utilizing Git for version control, and employing Tailwind
        CSS for rapid design development. I am also familiar with using GitHub
        for code collaboration and jQuery for simplifying JavaScript
        programming. My goal is to continuously improve my coding abilities and
        stay updated with the latest industry trends to deliver high-quality,
        efficient code. I am dedicated to producing visually appealing and
        responsive websites that provide an excellent user experience.
      </p>
      <div className=" w-full my-10 rounded-md grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-start p-4 md:text-2xl text-[15px] text-start">
        <h1 className="text-myGreen my-1 opacity-0 translate-y-3 anim-view relative flex gap-2 flex-col md:flex-row text-center md:text-start"
          style={{ animationDelay: "0.2s" }}>
          <span className="text-myGreen bg-[#2d2c35] px-4 py-2 rounded-lg">Name :</span>
          <span className="text-white  text-xl bg-[#2d2c35] px-4 py-2 rounded-lg">Fares Mohamed</span>
        </h1>
        <h1 className="text-myGreen my-1 opacity-0 translate-y-3 anim-view relative flex gap-2 flex-col md:flex-row text-center md:text-start"
          style={{ animationDelay: "0.2s" }}>
          <span className="text-myGreen bg-[#2d2c35] px-4 py-2 rounded-lg">Phone :</span>
          <span className="text-white  text-xl bg-[#2d2c35] px-4 py-2 rounded-lg">+20 1124711424</span>
        </h1>
        <h1 className="text-myGreen my-1 opacity-0 translate-y-3 anim-view relative flex gap-2 flex-col md:flex-row text-center md:text-start"
          style={{ animationDelay: "0.4s" }}>
          <span className="text-myGreen bg-[#2d2c35] px-4 py-2 rounded-lg">Experience :</span>
          <span className="text-white  text-xl bg-[#2d2c35] px-4 py-2 rounded-lg"> 3+ Years</span>
        </h1>
        <h1 className="text-myGreen my-1 opacity-0 translate-y-3 anim-view relative flex gap-2 flex-col md:flex-row text-center md:text-start"
          style={{ animationDelay: "0.5s" }}>
          <span className="text-myGreen bg-[#2d2c35] px-4 py-2 rounded-lg">Nationality :</span>
          <span className="text-white  text-xl bg-[#2d2c35] px-4 py-2 rounded-lg">Egyptian</span>
        </h1>
        <h1 className="text-myGreen my-1 opacity-0 translate-y-3 anim-view relative flex gap-2 flex-col md:flex-row text-center md:text-start"
          style={{ animationDelay: "0.6s" }}>
           <span className="text-myGreen bg-[#2d2c35] px-4 py-2 rounded-lg">Email :</span>
          <span className="text-white  text-xl bg-[#2d2c35] px-4 py-2 rounded-lg"> fm883254@gmail.com</span>
        </h1>
        <h1 className="text-myGreen my-1 opacity-0 translate-y-3 anim-view relative flex gap-2 flex-col md:flex-row text-center md:text-start"
          style={{ animationDelay: "0.7s" }}>
           <span className="text-myGreen bg-[#2d2c35] px-4 py-2 rounded-lg ">Language :</span>
          <span className="text-white text-lg  bg-[#2d2c35] px-4 py-2 rounded-lg">
            B1-English
          </span>
        </h1>
      </div>
    </div>
  );
};
export default About;
