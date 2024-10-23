import React from "react";
import { MdArrowOutward } from "react-icons/md";
import react from "../assets/svgtech/react.svg";

import mongo from "../assets/svgtech/mongo.svg";
import tailwind from "../assets/svgtech/tailwind.svg";
import sak from "../assets/sakshi_port.webm";
import vite from "../assets/svgtech/vit.svg";
import LoopingVideo from "../components/ProjectVideo";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Portfolio = () => {
  const TechStack = [
    {
      name: "Vite",
      desc: "Build tool",
      link: "https://vitejs.dev/",
      logo: vite, // Replace with your import or image path
    },
    {
      name: "React",
      desc: "Frontend framework",
      link: "https://react.dev/",
      logo: react, // Replace with your import or image path
    },
    {
      name: "Tailwind CSS",
      desc: "CSS framework",
      link: "https://tailwindcss.com/docs",
      logo: tailwind, // Replace with your import or image path
    },
  ];
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div className="flex flex-row h-screen max-h-screen overflow-hidden w-full bg-cover bg-center">
      <div className="w-full bg-[#0C0C0C] flex flex-col h-full overflow-hidden project md:p-4 px-4 pt-4">
        <div className="  ">
          <div
            className="flex font-cascadia text-lg text-white justify-start items-center gap-x-2 cursor-pointer"
            onClick={handleGoBack}
          >
            <RiArrowLeftSLine className="w-5 h-5" />
            <div>Back</div>
          </div>
        </div>
        <div className="flex gap-x-2 justify-start items-center md:mt-0 mt-4">
          <div className="w-full flex md:flex-row flex-col justify-between md:pr-6 md:items-center items-start">
            {" "}
            <div className="text-2xl text-[#FC874A] font-cascadia">
              Portfolio Website
            </div>
            <div className="text-2xl text-[#70C54E] font-cascadia font-medium flex justify-center items-center md:mt-0 mt-2">
              {"{"}{" "}
              <span className="text-white hover:text-[#70C54E] hover:underline">
                link
              </span>{" "}
              <span className=" text-[#70C54E] underline">
                <MdArrowOutward />
              </span>
              {"}"}
            </div>
          </div>
        </div>
        <div className="text-white font-cascadia text-md md:leading-8 md:w-[70%] mt-4 ">
          I developed this portfolio to showcase the work of Sakshi Vaidya, a
          talented UI/UX designer, which delivers a visually engaging user
          experience through intuitive design.
        </div>
        <div className="w-full justify-center items-center flex">
          <div className="md:w-[75%] ">
            <div className=" text-white mt-6">
              <div className=" mx-auto md:p-4">
                <LoopingVideo src={sak} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
