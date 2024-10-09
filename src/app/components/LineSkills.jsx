import React from "react";
const LineSkills = () => {
  const skillsItems = ["html", "css", "js", "html","html","html","html","html","html","html","html","html","html"];
  return (
    <div className="slide max-w-[800px] h-[80px] border overflow-hidden" style={{'--quantity':skillsItems.length}}>
      <div className={`list flex w-full relative gap-5 min-w-[clc(800px * ${skillsItems.length})]`}>
        {skillsItems.map((item, index) => (
          <div
            key={index}
            className="w-[80px] h-[80px] scrollAnim absolute left-full flex items-center justify-center  bg-transparent text-xl text-white px-10 py-4 border rounded-md "
            style={{
              animationDelay: `${
                (20000 / skillsItems.length) * ( index - 1)
              }ms`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default LineSkills;
