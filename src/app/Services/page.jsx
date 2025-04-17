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
          Providing front-end development services with React.js and Next.js, utilizing JSX and TSX to create user-friendly interfaces. Leveraging the latest technologies to ensure fast, secure, and responsive websites with a strong focus on accessibility and flexible components.
        </p>
      </div>
      <div className="shadow-my text-white p-10 opacity-0 translate-y-3 anim-view "
        style={{ animationDelay: "0.7s" }}>
        <p className="text-myGreen text-5xl font-bold">2</p>
        <h1 className="md:text-3xl text-2xl font-bold my-5">UI / Ux Design</h1>
        <p className="text-base font-medium text-neutral-500">
        Working on UI/UX skills to ensure delivering the best user experience for your website by matching the most suitable colors and designing optimal components for your web platform
        </p>
      </div>
      <div className="shadow-my text-white p-10 opacity-0 translate-y-3 anim-view "
        style={{ animationDelay: "0.8s" }}>
        <p className="text-myGreen text-5xl font-bold">3</p>
        <h1 className="md:text-3xl text-2xl font-bold my-5">Back End Development</h1>
        <p className="text-base font-medium text-neutral-500">
        Enhancing back-end skills to ensure efficient database management and robust website security using the Node.js , Express , mongodb
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
