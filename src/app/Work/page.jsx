"use client";
import React, { useState } from "react";
import BgAnim from "../components/BgAnim";
const page = () => {
  const list = [
    [
      "1",
      "Dental booking website",
      "A simple design for booking website with admin Dashboard",
      "Html 5, Css 3, Javascript , react and Tailwind",
      "https://github.com/fares12358/BookingDentist",
      "https://booking-dentist.vercel.app/",
      "/images/dentist.png",
      "4",
      "1"
    ],
    [
      "2",
      "Bondi landing page",
      "A simple Bondi design for responsive web site",
      "Html 5, Css 3, Javascript and bootstrap",
      "https://github.com/fares12358/new-Bondi",
      "https://fares12358.github.io/new-Bondi/",
      "/images/Untitled (1).png",
      "0",
      "2"

    ],
    [
      "3",
      "Mobile back cover",
      "A simple e-commerce design for mobile cover",
      "Html 5, Css 3, Javascript , react and bootstrap",
      "https://github.com/fares12358/online-shop-with-react",
      "https://fares12358.github.io/online-shop-with-react/",
      "/images/backApp.png",
      "1",
      "3"
    ],
    [
      "4",
      "island landing page",
      "A landing pag for travel island web site",
      "Html 5, Css 3, Javascript and bootstrap",
      "https://github.com/fares12358/island",
      "https://fares12358.github.io/island/",
      "/images/island.png",
      "2",
      "4"
    ],
    [
      "5",
      "404 Page",
      "A 404 Error not found page design",
      "Html 5, Css 3, Javascript and bootstrap",
      "https://github.com/fares12358/Xcompany",
      "https://fares12358.github.io/Xcompany/",
      "/images/Untitled.png",
      "3",
      "0"
    ],
  ];

  const [listNum, setListNum] = useState(4);

  return (
    <section className=" w-full h-[calc(100%-80px)] bg-transparent grid md:grid-cols-2  grid-cols-1 md:px-10 px-0 py-5">
      <BgAnim />
      <div className="p-10 md:mt-20 order-2 md:order-1">
        <p
          className="text-5xl font-bold text-myGreen py-5 opacity-0 translate-y-3 anim-view relative"
          style={{ animationDelay: "0.6s" }}
        >
          {list[listNum][0]}
        </p>
        <h1
          className="text-3xl font-bold text-white opacity-0 translate-y-3 anim-view relative"
          style={{ animationDelay: "0.7s" }}
        >
          {list[listNum][1]}
        </h1>
        <p
          className="text-lg py-4 text-neutral-500 opacity-0 translate-y-3 anim-view relative"
          style={{ animationDelay: "0.8s" }}
        >
          {list[listNum][2]}
        </p>
        <p
          className="text-myGreen font-bold py-2 opacity-0 translate-y-3 anim-view relative"
          style={{ animationDelay: "0.9s" }}
        >
          {list[listNum][3]}
        </p>
        <hr
          className="bg-neutral-600 my-5 border-none py-[0.5px] w-[80%] mx-auto opacity-0 translate-y-3 anim-view relative"
          style={{ animationDelay: "0.5s" }}
        />
        <div className="sm:w-[250px] w-full mx-auto flex justify-around items-center ">
          <div
            className=" bg-[#28272c] p-5 rounded-xl cursor-pointer opacity-0 -translate-x-3 anim-view relative"
            style={{ animationDelay: "0.7s" }}
          >
            <a href={list[listNum][4]}>
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                className="w-[40px] m-auto"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>github [#142]</title> <desc>Created with Sketch.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="#ffffff"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
          </div>
          <div
            className="bg-[#28272c] p-5 rounded-xl cursor-pointer opacity-0 translate-x-3 anim-view relative"
            style={{ animationDelay: "0.7s" }}
          >
            <a href={list[listNum][5]}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[40px] m-auto"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
            </a>
          </div>
        </div>
        <hr
          className="bg-neutral-600 my-5 border-none py-[0.5px] w-[80%] mx-auto opacity-0 translate-y-3 anim-view relative"
          style={{ animationDelay: "0.5s" }}
        />
        <div className="w-[150px] mx-auto flex justify-around items-center my-10">
          <div
            className=" bg-[#28272c] p-2 rounded-[50%] cursor-pointer opacity-0 -translate-x-3 anim-view relative "
            style={{ animationDelay: "0.9s" }}
            onClick={()=>{setListNum(list[listNum][7])}}
          >
            <svg
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[40px] m-auto"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-5v4l-5-5 5-5v4h5v2z"></path>
              </g>
            </svg>
          </div>
          <div
            className="bg-[#28272c] p-2 rounded-[50%] cursor-pointer opacity-0 translate-x-3 anim-view relative"
            style={{ animationDelay: "0.9s" }}
            onClick={()=>{setListNum(list[listNum][8])}}
          >
            <svg
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
              className="w-[40px] m-auto"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-5v4l-5-5 5-5v4h5v2z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center order-1 md:order-2">
        <div
          className="image-holder flex justify-center items-center p-5 md:p-10 opacity-0 translate-x-3 anim-view relative"
          style={{ animationDelay: "0.7s" }}
        >
          <img
            className="img-fluid glass p-5 sm:p-10"
            src={list[listNum][6]}
            alt="not found"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
