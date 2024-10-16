"use client";
import React, { useState } from "react";
import BgAnim from "../components/BgAnim";
import { list } from "@/utils/data";
import Image from "next/image";
const page = () => {

  const [listNum, setListNum] = useState(0);
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
        <div className="sm:w-[250px] w-full mx-auto flex  gap-4 items-center justify-center">
          <div
            className=" bg-[#28272c] p-3 rounded-xl cursor-pointer opacity-0 -translate-x-3 anim-view relative"
            style={{ animationDelay: "0.7s" }}
          >
            <a href={list[listNum][4]} target="_blank">
              <Image src='/svg/github.svg' alt="icon" width={30} height={30} />
            </a>
          </div>
          <div
            className="bg-[#28272c] p-3 rounded-xl cursor-pointer opacity-0 translate-x-3 anim-view relative"
            style={{ animationDelay: "0.7s" }}
          >
            <a href={list[listNum][5]} target="_blank">
              <Image src='/svg/link.svg' alt="icon" width={30} height={30} />
            </a>
          </div>
        </div>
        <hr
          className="bg-neutral-600 my-5 border-none py-[0.5px] w-[50%] mx-auto opacity-0 translate-y-3 anim-view relative"
          style={{ animationDelay: "0.5s" }}
        />
        <div className="w-[150px] mx-auto flex justify-center gap-2 items-center my-10">
          <div
            className=" bg-[#28272c] p-2 rounded-[50%] cursor-pointer opacity-0 -translate-x-3 anim-view relative "
            style={{ animationDelay: "0.9s" }}
            onClick={() => {
              setListNum(list[listNum][7]);
            }}
          >
            <Image src='/svg/arrow1.svg' alt="icon" width={30} height={30} />
          </div>
          <div
            className="bg-[#28272c] p-2 rounded-[50%] cursor-pointer opacity-0 translate-x-3 anim-view relative"
            style={{ animationDelay: "0.9s" }}
            onClick={() => {
              setListNum(list[listNum][8]);
            }}
          >
          <Image src='/svg/arrow2.svg' alt="icon" width={30} height={30} />
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
