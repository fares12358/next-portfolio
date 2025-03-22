"use client";
import React, { useState } from "react";
import BgAnim from "../components/BgAnim";
import { list } from "@/utils/data";
import ImageHolder from "../components/ImageHolder";
import DescriptionHolder from "../components/DescriptionHolder";
import FadeInSection from "../components/FadeInSection";
const page = () => {
  const [listNum, setListNum] = useState(0);
  return (
    <section className=" w-full h-[calc(100%-80px)] bg-transparent flex flex-col items-center justify-start gap-28 md:px-10 px-0 py-10 overflow-x-auto  main">
      <BgAnim />
      {
        list.length !== 0 ?
          list.map((item, index) => (
            <FadeInSection key={index}>
              <div className="w-full h-fit flex flex-col flex-wrap lg:flex-row  justify-center items-center  2xl:justify-between xl:p-20  opacity-0 translate-x-3 anim-view " 
                style={{ animationDelay: "0.6s" }}
              >
                <DescriptionHolder name={item[0]} desc={item[1]} tch={item[2]} gitLink={item[3]} pageLink={item[4]} />
                <ImageHolder src={item[5]} />
              </div>
            </FadeInSection>

          ))
          :
          ''
      }

    </section>
  );
};
export default page;