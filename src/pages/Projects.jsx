import React from "react";
import grid from "../assets/image.png";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { openInNewTab } from "../data";
import MobileNavbar from "../components/MobileNavbar";

const Projects = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  const handleNavigate = (id) => {
    if (id === 4) {
      // console.log("sak")
      navigate("/portfolio");
    } else {
      navigate(`/projects/${id}`);
    }
  };
  const handleLinkClick = (e, link) => {
    e.stopPropagation(); // Stop event from bubbling up
    openInNewTab(link);
  };
  return (
    <div
      className="bg-black md:h-screen h-screen relative w-full bg-cover bg-blend-overlay  justify-start items-start flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    <div className="md:hidden block"><MobileNavbar/></div>
    <div className="absolute top-6 right-6 md:block hidden"><Navbar/></div>
      <div className="text-white w-[95% ]    flex flex-col justify-start">
        <div className="flex md:justify-between w-full items-start md:px-6 px-2 md:pt-4">
          <div className="flex justify-start items-center md:gap-x-4 gap-x-4 md:mb-10 pt-8">
            <div
              className="cursor-pointer hover:text-[#FC874A]"
              onClick={handleGoBack}
            >
              <MdOutlineArrowBackIos className="w-5 h-5" />
            </div>
            <div className="relative ">
              <div
                className="font-warpen md:text-3xl text-md absolute top-0 md:left-0 left-1 z-0"
                style={{
                  color: "#6D2720",
                  textShadow: `
        0px 0px 8px rgba(109, 39, 32, 0.8),
        0px 0px 16px rgba(109, 39, 32, 0.8),
        0px 0px 24px rgba(109, 39, 32, 0.7),
        0px 0px 32px rgba(109, 39, 32, 0.6)
      `,
                }}
              >
                SELECTED PROJECTS
              </div>
              <div
                className="font-warpen md:text-3xl text-md color-text"
                data-text="SAATVIKA DELLI"
              >
                SELECTED PROJECTS
              </div>
            </div>
            <div className="font-cascadia md:text-xl text-sm md:flex hidden">
              {"{ "}2023-2024{" }"}
            </div>
          </div>
          
        </div>
        <div className="font-cascadia md:text-xl text-md md:hidden flex pt-4 pl-10  ">
        {"{ "}2023-2024{" }"}
      </div>
        <div className="overflow-y-auto scrollbar-thin max-h-[70vh]  pr-6 mt-6">
          {projects.map((project) => (
            <div key={project.id}>
              <div
                onClick={() => {
                  handleNavigate(project.id);
                }}
                className="flex flex-row justify-start  px-6 py-6 items-start cursor-pointer   gap-x-8 hover:bg-[#0C0C0C] hover:rounded-xl shadow-inner2"
              >
                <div className="flex flex-col justify-start items-start  gap-y-4 w-full">
                  <div className="flex flex-row justify-between items-center w-full ">
                    <div className="md:text-2xl text-xl text-white font-cascadia font-semibold">
                      {project.name}
                    </div>
                    <div className="text-2xl text-[#70C54E] font-cascadia font-medium md:flex hidden cursor-pointer"
                    onClick={(e) => handleLinkClick(e, project.link)}
                    >
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

                  <div className="md:text-lg text-md md:leading-8 colorOpa md:w-[60%] w-full font-cascadia">
                    {project.des.map((segment, index) => (
                      <span key={index} style={{ color: segment.color }}>
                        {segment.text}
                      </span>
                    ))}
                  </div>
                  <div className="text-2xl text-[#70C54E] font-cascadia font-medium flex justify-end w-full items-center md:hidden cursor-pointer" 
                  onClick={(e) => handleLinkClick(e, project.link)}
                  >
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
              <hr className="dash w-full mt-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
