"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faSquareWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import BgAnim from "./components/BgAnim";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getDataFromGithub } from "@/utils/APIGithub";
export default function Home() {
  const getCv = (e) => {
    event.preventDefault();
    let fileUrl = "/pdf/cv2.pdf";

    // Create a temporary anchor element
    let link = document.createElement("a");
    link.href = fileUrl;
    link.download = "cv.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error,setError]=useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getDataFromGithub();
        setData(result);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className=" w-full h-[calc(100%-80px)] bg-transparent grid grid-cols-2 md:px-10 px-0 py-5">
      <BgAnim />
      <div className="text-holder col-span-2 xl:col-span-1 pt-10 px-10 font-bold text-white text-3xl order-2 xl:order-1 ">
        <p
          className="  font-medium text-xl my-5 opacity-0 -translate-y-3 anim-view "
          style={{ animationDelay: "0.8s" }}
        >
          Software Developer
        </p>
        <h1
          className="md:text-5xl text-4xl my-10 w-[80%]  opacity-0 -translate-y-3 anim-view "
          style={{ animationDelay: "0.7s" }}
        >
          Hello I'm <br />
          <span className="text-myGreen text-5xl">Fares Mohamed</span>
        </h1>
        <p
          className="my-10 w-full md:text-2xl text-xl leading-9 tracking-normal opacity-0 translate-y-3 anim-view"
          style={{ animationDelay: "0.6s" }}
        >
          I'am a
          <span className="text-myGreen text-2xl"> front-end developer.</span>
          <br /> and I created this website to introduce myself and showcase my
          skills in
          <span className="text-myGreen text-2xl">front-end development</span>.
          Welcome!
        </p>
        <div
          className=" flex justify-around items-center flex-col md:flex-row  opacity-0 translate-y-3 anim-view "
          style={{ animationDelay: "0.8s" }}
        >
          <button
            className="sm:text-lg text-base sm:w-[240px] w-[200px] h-[50px] md:mb-0 mb-10 xl:mb-0 text-myGreen border-2 border-myGreen px-5 py-2 rounded-3xl flex justify-around items-center"
            onClick={getCv}
          >
            <p>DownloadCV </p>
            <span className="h-[100%] w-[50px] flex items-center justify-center">
              <FontAwesomeIcon className="w-[50%]" icon={faDownload} />
            </span>
          </button>
          <ul className="px-10 flex items-center text-myGreen">
            <li
              className=" rounded-[50%] h-[50px] w-[50px] mx-2 flex items-center justify-center p-2 cursor-pointer opacity-0 translate-y-3 anim-view "
              style={{ animationDelay: "1.4s" }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100038710270979&mibextid=ZbWKwL"
                target="_blank"
                aria-label="facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li
              className=" rounded-[50%] h-[50px] w-[50px] mx-2 flex items-center justify-center p-2 cursor-pointer opacity-0 translate-y-3 anim-view "
              style={{ animationDelay: "1.5s" }}
            >
              <FontAwesomeIcon icon={faSquareWhatsapp} />
            </li>
            <li
              className=" rounded-[50%] h-[50px] w-[50px] mx-2 flex items-center justify-center p-2 cursor-pointer opacity-0 translate-y-3 anim-view "
              style={{ animationDelay: "1.6s" }}
            >
              <a
                href="https://www.linkedin.com/in/fares-mohamed-74980a241/"
                target="_blank"
                aria-label="linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li
              className=" rounded-[50%] h-[50px] w-[50px] mx-2 flex items-center justify-center p-2 cursor-pointer opacity-0 translate-y-3 anim-view "
              style={{ animationDelay: "1.7s" }}
            >
              <a
                href="https://github.com/fares12358"
                target="_blank"
                aria-label="github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="img-holder xl:col-span-1 col-span-2  flex items-center justify-center order-1 xl:order-2  py-10 opacity-0 translate-y-3 anim-view relative"
        style={{ animationDelay: "0.8s" }}
      >
        <motion.div className="flex justify-center items-center">
          <div
            className="image md:w-[400px] w-[300px] md:h-[400px] h-[300px] rounded-[50%] overflow-hidden  absolute bg-[url('/images/ME2_converted.webp')] bg-cover bg-center bg-myBlack "
            style={{
              boxShadow:
                "inset 0 0 60px 10px #1d1c22 , inset 0 0 40px 20px #1d1c22 , inset 0 0 50px 30px #1d1c22",
            }}
          ></div>

          <motion.svg
            className="md:w-[400px] w-[300px] md:h-[400px] h-[300px] z-30"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </motion.div>
      </div>
      <div className="desc-holder grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 p-10 col-span-2  order-3 my-10">
        <div
          className="flex flex-col justify-center items-center text-white sm:text-2xl text-xl font-bold shadow-my min-h-36 py-10 opacity-0 translate-y-3 anim-view "
          style={{ animationDelay: "1.4s" }}
        >
          <span className="text-myGreen sm:text-5xl text-3xl my-2">2</span>years
          of experience
        </div>
        <div
          className="flex flex-col justify-center items-center text-white sm:text-2xl text-xl font-bold shadow-my min-h-36 py-10 opacity-0 translate-y-3 anim-view "
          style={{ animationDelay: "1.3s" }}
        >
          {data.length > 0 && !loading  && Error === '' ? (
            <>
              <span className="text-myGreen sm:text-5xl text-3xl my-2">
                {data[0].public_repos}
              </span>
              Repositories
            </>
          ) : (
            Error === '' ?
            <div className="loadingtext relative text-md rounded-md">
              Loading
            </div>
            :
            <div className="error text-red-500 text-md">{Error}</div>

          )}
        </div>
        <div
          className="flex flex-col justify-center items-center text-white sm:text-2xl text-xl font-bold shadow-my min-h-36 py-10 opacity-0 translate-y-3 anim-view "
          style={{ animationDelay: "1.2s" }}
        >
          <span className="text-myGreen sm:text-5xl text-3xl my-2">14</span>
          Technologies
        </div>
        <div
          className="flex flex-col justify-center items-center text-white sm:text-2xl text-xl font-bold shadow-my min-h-36 py-10 opacity-0 translate-y-3 anim-view "
          style={{ animationDelay: "1.1s" }}
        >
          {data.length > 0 && !loading && Error === ''? (
            <>
              <span className="text-myGreen sm:text-5xl text-3xl my-2">
                {data[1]}
              </span>
              Code commits
            </>
          ) : (
            Error === '' ?
            <div className="loadingtext relative text-md rounded-md">
              Loading
            </div>
            :
            <div className="error text-red-500 text-md">{Error}</div>
          )}
        </div>
      </div>
    </section>
  );
}
