import React from "react";
import BgAnim from "../components/BgAnim";
const page = () => {
  return (
    <section className=" w-full bg-transparent grid lg:grid-cols-2 grid-cols-1  gap-10 py-5 px-2 lg:p-20 pb-20">
      <BgAnim />
      <div className="shadow-my text-white p-10 opacity-0 translate-y-3 anim-view "
        style={{ animationDelay: "0.6s" }}>
        <p className="text-myGreen text-5xl  font-bold ">1</p>
        <h1 className="md:text-3xl text-2xl font-bold my-5">Front End Development</h1>
        <p className="text-base font-medium text-neutral-500">
          Providing Front End development services using the latest technologies to
          ensure fast, secure, and responsive websites. Whether you need a
          business site, personal blog, or e-commerce platform, we're here to
          turn your vision into reality.
        </p>
      </div>
      <div className="shadow-my text-white p-10 opacity-0 translate-y-3 anim-view "
        style={{ animationDelay: "0.7s" }}>
        <p className="text-myGreen text-5xl font-bold">2</p>
        <h1 className="md:text-3xl text-2xl font-bold my-5">UI / Ux Design<span className="text-myGreen text-sm md:text-xl ml-3"> working on it . . .</span></h1>
        <p className="text-base font-medium text-neutral-500">
          Designing attractive and user-friendly interfaces to ensure a seamless
          and comfortable user experience. We focus on innovation and simplicity
          to make your apps and websites meet the needs of your audience in the
          best possible way.
        </p>
      </div>
      <div className="shadow-my text-white p-10 opacity-0 translate-y-3 anim-view "
        style={{ animationDelay: "0.8s" }}>
        <p className="text-myGreen text-5xl font-bold">3</p>
        <h1 className="md:text-3xl text-2xl font-bold my-5">Back End Development<span className="text-myGreen text-sm md:text-xl ml-3"> working on it . . .</span></h1>
        <p className="text-base font-medium text-neutral-500">
          We provide reliable backend development services using the latest technologies to build strong, scalable, and efficient systems. From API integrations and database management to custom server solutions, we focus on delivering secure, high-performance backends for your project. Let us help you bring your ideas to life with backend solutions designed to meet your specific needs.
        </p>
      </div>
      <div className="shadow-my text-white p-10 opacity-0 translate-y-3 anim-view"
        style={{ animationDelay: "0.9s" }}>
        <p className="text-myGreen text-5xl font-bold">4</p>
        <h1 className="text-3xl font-bold my-5">Logo design</h1>
        <p className="text-base font-medium text-neutral-500">
          Creating unique and expressive logos that reflect the identity of your
          company or project. We work to deliver simple, elegant, and meaningful
          logos that help build a strong and memorable brand.
        </p>
      </div>
    </section>
  );
};
export default page;
