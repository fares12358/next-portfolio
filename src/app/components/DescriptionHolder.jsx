import React from 'react'
import Image from "next/image";
const DescriptionHolder = ({name,desc,tch,gitLink,pageLink}) => {
    return (
        <div className="order-2 lg:order-1 text-center lg:text-start px-3 flex-1">

            <h1
                className="text-2xl md:text-3xl font-bold text-white opacity-0 translate-y-3 anim-view relative"
                style={{ animationDelay: "0.7s" }}
            >
                {name}
            </h1>
            <p
                className="text-lg md:text-xl py-4 text-neutral-500 opacity-0 translate-y-3 anim-view relative flex flex-wrap"
                style={{ animationDelay: "0.8s" }}
            >
                {desc}
            </p>
            <p
                className="text-myGreen text-xs md:text-[17px] font-bold py-2 opacity-0 translate-y-3 anim-view relative"
                style={{ animationDelay: "0.9s" }}
            >
                {tch}
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
                    <a href={gitLink} target="_blank">
                        <Image src='/svg/github.svg' alt="icon" width={30} height={30} />
                    </a>
                </div>
                <div
                    className="bg-[#28272c] p-3 rounded-xl cursor-pointer opacity-0 translate-x-3 anim-view relative"
                    style={{ animationDelay: "0.7s" }}
                >
                    <a href={pageLink} target="_blank">
                        <Image src='/svg/link.svg' alt="icon" width={30} height={30} />
                    </a>
                </div>
            </div>
           
        </div>
    )
}

export default DescriptionHolder