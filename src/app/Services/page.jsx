import React from "react";
import BgAnim from "../components/BgAnim";
const page = () => {
  return (
    <section className=" w-full bg-transparent grid lg:grid-cols-2 grid-cols-1  gap-10 py-5 px-2 lg:p-20 ">
      <BgAnim />
      <div className="shadow-my text-white p-10 opacity-0 translate-y-3 anim-view "
        style={{ animationDelay: "0.6s" }}>
        <p className="text-myGreen text-5xl  font-bold ">1</p>
        <h1 className="text-3xl font-bold my-5">Web Development</h1>
        <p className="text-base font-medium text-neutral-500">
          Providing web development services using the latest technologies to
          ensure fast, secure, and responsive websites. Whether you need a
          business site, personal blog, or e-commerce platform, we're here to
          turn your vision into reality.
        </p>
      </div>
      <div className="shadow-my text-white p-10 opacity-0 translate-y-3 anim-view "
        style={{ animationDelay: "0.7s" }}>
        <p className="text-myGreen text-5xl font-bold">2</p>
        <h1 className="text-3xl font-bold my-5">UI / Ux Design</h1>
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
        <h1 className="text-3xl font-bold my-5">SEO</h1>
        <p className="text-base font-medium text-neutral-500">
          Optimizing your sites to appear in the top search results on search
          engines. We use advanced strategies to ensure increased visitors,
          improved online visibility, and higher engagement with your content.
        </p>
      </div>
      <div className="shadow-my text-white p-10 opacity-0 translate-y-3 anim-view "
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
