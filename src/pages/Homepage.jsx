import React, { useEffect, useState } from "react";
import grid from "../assets/image.png";
import Main from "./Main";
import Projects from "./Projects";
import Navbar from "../components/Navbar";
import bg from "../assets/24936.jpg";
import { MdArrowOutward } from "react-icons/md";
import MobileNavbar from "../components/MobileNavbar";
const Homepage = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center md:py-6 py-2 bg-black"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-px bg-gradient-to-r from-white to-[#df948a] rounded-xl w-[95%] md:w-2/3 lg:w-[97%] h-full">
        <div
          className="bg-black bg-opacity-40 relative bg-blend-overlay w-full h-full rounded-xl justify-start items-center flex flex-col overflow-hidden"
          style={{
            backgroundImage: `url(${grid})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        <div className="md:hidden block"><MobileNavbar/></div>
          <div className="w-full h-full flex justify-between">
            <div className={` w-full h-full`}>
              <div className="w-[95%] mx-auto h-full text-white pt-10 ">
                <Main />
              </div>
            </div>
            <div className="p-4 md:block hidden">
              <Navbar />
            </div>
          </div>
          <div className="flex justify-center items-center font-cascadia text-xl gap-x-2 w-full">
            {"{"}
            <div>scroll for projects</div>{" "}
            <div>
              <MdArrowOutward />
            </div>{" "}
            {"}"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
