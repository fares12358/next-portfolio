import React from "react";
const loading = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-myBlack absolute top-0 left-0 ">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
export default loading;
