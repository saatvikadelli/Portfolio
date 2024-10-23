import React, { useEffect, useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import mongo from "../assets/svgtech/mongo.svg";
import { useNavigate, useParams } from "react-router-dom";
import { projectDetails } from "../data/projects";
import { FaMobile } from "react-icons/fa6";
import { highlightTechnicalTerms, openInNewTab } from "../data";
import LoopingVideo from "../components/ProjectVideo";
import matbook from "../assets/matbook.webm";
import { MdArrowOutward } from "react-icons/md";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [selectedTag, setSelectedTag] = useState("Overview");

  useEffect(() => {
    const foundProject = projectDetails.find(
      (project) => project.id === parseInt(id)
    );
    setProject(foundProject);
  }, [id]);

  const handleSelect = (name) => {
    setSelectedTag(name);
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  
  const handleLinkClick = (e, link) => {
    e.stopPropagation(); // Stop event from bubbling up
    openInNewTab(link);
  };
  return (
    <div className="flex md:flex-row  flex-col md:h-screen md:max-h-screen md:overflow-hidden overflow-y-auto w-full bg-cover bg-center">
      <div className=" md:w-1/3 w-full bg-[#0C0C0C] flex flex-col h-full overflow-hidden project">
        {/* Left Panel Header */}
        <div className="md:p-4  pt-8 flex-none">
          <div
            className="flex font-cascadia text-lg text-white justify-start items-center gap-x-2 cursor-pointer"
            onClick={handleGoBack}
          >
            <RiArrowLeftSLine className="w-5 h-5" />
            <div>Back</div>
          </div>
        </div>
        <div className="md:hidden flex gap-x-2 justify-start items-center px-4 pt-4">
          <div className="w-full flex justify-between pr-6">
            {" "}
            <div className="text-2xl text-[#FC874A] font-cascadia">
              {project?.name}
            </div>
          </div>
        </div>
         <div className="text-2xl text-[#70C54E] font-cascadia font-medium md:hidden flex px-4  pt-4 w-full justify-end items-center" onClick={(e) => handleLinkClick(e, project.link)}>
                {"{"}{" "}
                <span className="text-white hover:text-[#70C54E] hover:underline">
                  link
                </span>{" "}
                <span className=" text-[#70C54E] underline">
                  <MdArrowOutward />
                </span>
                {"}"}
              </div>

        {/* Tech Stack Section */}
        <div className="px-6 flex-none">
          <div className="flex font-cascadia text-lg text-[#B0AAFF] justify-start items-center gap-x-2">
            <div>{">"}</div>
            <div className="font-cascadia text-xl">Tech Stack</div>
          </div>
          <div className="flex flex-wrap md:gap-x-6 gap-x-2 gap-y-4 mt-4 w-full">
            {project?.TechStack?.map((t, index) => (
              <div
                className="flex bg-[#181717] hover:bg-[#372c45] rounded-full py-3 px-4 text-white justify-center items-center gap-x-4 cursor-pointer"
                key={index}
                onClick={() => openInNewTab(t.link)}
              >
                <div className="md:w-10 md:h-10 w-5 h-5">
                  <img
                    src={t.logo}
                    alt={`${t.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold md:text-base text-sm font-cascadia">
                    {t.name}
                  </div>
                  <div className="text-xs font-cascadia">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem Statement Section - Scrollable */}
        <div className="px-6 flex-1 overflow-hidden flex flex-col mt-10">
          <div className="flex font-cascadia text-lg text-[#B0AAFF] justify-start items-center gap-x-2 flex-none">
            <div>{">"}</div>
            <div className="font-cascadia text-xl">Problem Statement</div>
          </div>
          <div className="overflow-y-auto flex-1 mt-8 scrollbar-thin">
            <div className="text-white font-cascadia text-md md:leading-8  ">
              {project?.problem}
            </div>
            <ul className="list-disc text-white font-cascadia text-md pl-4 mt-6 space-y-4 md:mb-6">
              {project?.list?.map((l, index) => (
                <li key={index}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="md:w-2/3 w-full bg-[#0C0911] flex flex-col h-full overflow-hidden">
        {/* Right Panel Header */}
        <div className="md:pt-8 md:pl-6 flex-none">
          <div className="md:flex hidden gap-x-2 justify-start items-center">
              
            <div className="w-full flex justify-between pr-6">
              {" "}
              <div className="text-2xl text-[#FC874A] font-cascadia">
                {project?.name}
              </div>
              <div className="text-2xl text-[#70C54E] font-cascadia font-medium flex" onClick={(e) => handleLinkClick(e, project.link)}>
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

          <div className="mt-10 flex flex-row justify-start items-center gap-x-4 md:pl-10 pl-4">
            {["Overview", "Solutions"].map((name) => (
              <div
                key={name}
                onClick={() => handleSelect(name)}
                className={`cursor-pointer text-lg font-cascadia py-2 px-4 rounded-xl ${
                  selectedTag === name
                    ? "text-[#FC874A] bg-[#0C0C0C] shadow-inner"
                    : "colorOpa"
                }`}
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto md:pl-10 pl-4 pr-6 pb-6 scrollbar-thin">
          <div className="mt-8 text-white">
            {selectedTag === "Overview" &&
              (project?.id === 3 ? (
                <div className=" mx-auto md:p-4">
                  <LoopingVideo src={matbook} />
                </div>
              ) : (
                <div className="w-full flex justify-center items-center">
                  <img
                    src={project?.overview}
                    alt="ovr"
                    className={`${project?.id === 2 ?"md:w-full w-full rounded-xl":"md:w-[70%] w-full"} object-contain`}
                  />
                </div>
              ))}
            {selectedTag === "Solutions" && (
              <ul className="list-disc text-white font-cascadia md:text-xl pl-4 space-y-4 md:leading-10">
                {project?.solutions?.map((solution, index) => (
                  <li key={index}>
                    {highlightTechnicalTerms(
                      solution,
                      project?.highlightedTerms
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
