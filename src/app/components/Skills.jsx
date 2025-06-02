import React from "react";
import LineSkills from "./LineSkills";
import { skillsIcon, skillsItems } from "@/utils/data";
const Skills = () => {

  return (
    <div className="text-white p-5 flex flex-col justify-center items-center text-center md:text-left md:items-start">
      <h1
        className="md:text-5xl text-4xl font-bold my-5 opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "1.4s" }}
      >
        Skills
      </h1>
      <p
        className="text-neutral-500 font-base md:text-lg text-sm opacity-0 translate-y-3 anim-view relative mb-5"
        style={{ animationDelay: "1.5s" }}
      >
        Proficient in creating structured and semantic web pages using
        <span className="text-myGreen">HTML5</span>. Skilled in designing responsive and visually appealing layouts with
        <span className="text-myGreen">CSS3, SASS/SCSS</span>. Experienced in developing dynamic and interactive web applications using
        <span className="text-myGreen">JavaScript, TypeScript</span>.

        Knowledgeable in using
        <span className="text-myGreen">Bootstrap, Tailwind</span> frameworks for building responsive, mobile-first websites and creating custom designs. Proficient in version control using
        <span className="text-myGreen">Git</span> for collaborative development. Adept at building modern web applications with
        <span className="text-myGreen">React, Next.js</span>, focusing on component-based architecture. Experienced in using
        <span className="text-myGreen">GitHub</span> for code hosting, collaboration, and version control.

        Familiar with
        <span className="text-myGreen">jQuery</span> for simplifying JavaScript programming and handling events. Proficient in working with
        <span className="text-myGreen">JSON</span> for data interchange and
        <span className="text-myGreen">AJAX</span> for asynchronous data retrieval. Also familiar with unit testing using
        <span className="text-myGreen">Jest</span>.

        Junior MERN Stack Developer with experience in using
        <span className="text-myGreen">MongoDB</span> to store data,
        <span className="text-myGreen">Express</span> to handle requests from APIs, and
        <span className="text-myGreen">Node.js</span> for server-side development and backend logic.
      </p>
      <div className="col-span-3 self-center  flex items-center justify-center opacity-0 anim-view" style={{ animationDelay: "1.0s" }}>
        <LineSkills isIcon={false} direction={true} data={skillsItems} />
      </div>
      <div className="col-span-3 self-center  flex items-center justify-center opacity-0 anim-view" style={{ animationDelay: "1.0s" }}>
        <LineSkills isIcon={true} direction={false} data={skillsIcon} />
      </div>
    </div>
  );
};
export default Skills;
