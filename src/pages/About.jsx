import React from "react";
import grid from "../assets/image.png";
import saa from "../assets/saaaa.jpg";
import react from "../assets/svgtech/react.svg";
import firebase from "../assets/svgtech/firebase.svg";
import javascr from "../assets/svgtech/javascript.svg";
import mongo from "../assets/svgtech/mongo.svg";
import tailwind from "../assets/svgtech/tailwind.svg";

import node from "../assets/svgtech/node.svg";
import frame from "../assets/svgtech/framer.svg";
import java from "../assets/svgtech/java.svg";
import vite from "../assets/svgtech/vit.svg";

import git from "../assets/c2.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import { useNavigate } from "react-router-dom";
const About = () => {
  const experience = [
    {
      id: 1,
      name: "Full Stack Dev",
      company: "DineQr",
      time: "June 2024-now",
    },
    {
      id: 2,
      name: "Full Stack Dev",
      company: "Orbit Tech Cloud Solutions",
      time: "May 2023-May 2024",
    },
    {
      id: 3,
      name: "QA Engineer",
      company: "Netcracker Technology",
      time: "July 2021- Feb 2023",
    },
  ];
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
    {
      name: "MongoDB",
      desc: "NoSQL database",
      link: "https://www.mongodb.com/docs/",
      logo: mongo, // Replace with your import or image path
    },

    {
      name: "Node.js",
      desc: "JavaScript runtime",
      link: "https://nodejs.org/en/docs/",
      logo: node, // Replace with your import or image path
    },
    {
      name: "Express.js",
      desc: "Web framework",
      link: "https://expressjs.com/en/4x/api.html",
      logo: javascr, // Replace with your import or image path
    },
    {
      name: "Framer Motion",
      desc: "Animation library",
      link: "https://www.framer.com/motion/",
      logo: frame, // Replace with your import or image path
    },
    {
      name: "React Native",
      desc: "Mobile framework",
      link: "https://reactnative.dev/",
      logo: react, // Replace with your import or image path
    },
    {
      name: "MongoDB",
      desc: "NoSQL database",
      link: "https://www.mongodb.com/docs/",
      logo: mongo, // Replace with your import or image path
    },
    {
      name: "Firebase",
      desc: "Backend platform",
      link: "https://firebase.google.com/docs",
      logo: firebase, // Replace with your import or image path
    },

    {
      name: "Framer Motion",
      desc: "Animation library",
      link: "https://www.framer.com/motion/",
      logo: frame, // Replace with your import or image path
    },

    {
      name: "Java APIs",
      desc: "Backend APIs",
      link: "https://docs.oracle.com/en/java/",
      logo: java,
    },
  ];
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="h-screen w-full bg-cover bg-center flex items-center justify-center  bg-black">
      <div
        className="bg-black bg-opacity-40 bg-blend-overlay w-full h-full justify-start items-center md:p-4 flex flex-col overflow-hidden"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <div className="md:hidden block"><MobileNavbar/></div>
        <div className="flex justify-between w-full items-start ">
          <div className="md:flex-row flex-col flex justify-start items-center md:gap-x-10 pt-6 w-full ">
            <div
              className="w-[71px] h-[69px] rounded-full"
              style={{
                color: "#C35A46",
                boxShadow: `
0px 0px 60px rgba(195, 90, 70, 0.2),
0px 0px 60px rgba(195, 90, 70, 0.2),
0px 0px 60px rgba(195, 90, 70, 0.2),
0px 0px 60px rgba(195, 90, 70, 0.4)
`,
              }}
            >
              <img
                src={saa}
                alt=""
                className="w-full h-full object-cover rounded-full cursor-pointer"
                onClick={()=>navigate('/')}
              />
            </div>
            <div className="relative md:mt-0 mt-4">
              <div
                className="font-warpen md:text-3xl text-xl absolute top-0 md:left-0 left-1 z-0 md:block hidden"
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
                SAATVIKA DELLI
              </div>
              <div
                className="font-warpen md:text-3xl text-xl color-text cursor-pointer"
                data-text="SAATVIKA DELLI"
                onClick={()=>navigate('/')}
              >
                SAATVIKA DELLI
              </div>
            </div>
          </div>
          <div className="md:block hidden">
            <Navbar />
          </div>
        </div>

        <div className="md:w-[85%] w-[95%] flex md:justify-center px-2 md:mt-0 mt-6  md:items-center flex-col md:h-full h-[70vh] md:overflow-y-hidden overflow-y-auto scrollbar-thin">
          <div className="flex md:flex-row  flex-col md:space-x-4 md:space-y-0 space-y-6">
            <div className="md:w-1/2 w-full bg-[#181717] rounded-xl p-4">
              <p className="font-cascadia text-md text-[#B0AAFF] ">
                Code Name: Saatvi
              </p>
              <p className="font-cascadia md:text-base text-sm text-white text-opacity-75 mt-2">
                ⚡Saatvi thrives in the digital battlefield, mastering both the
                frontend 🖥️ and backend 🛠️ with precision.🔄 Constantly
                evolving, she adapts to new technologies 📱, bringing innovative
                💡 and scalable solutions 🏗️ to every mission. With Saatvi on
                your team, no bug 🐛 or challenge 🚀 stands a chance.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-[#181717] rounded-xl p-2 md:p-4">
              <h1 className="font-cascadia text-sm md:text-md text-[#B0AAFF] px-2 md:px-4 pt-2 md:pt-4">
                Experience
              </h1>

              <div className="flex flex-col space-y-2 py-2">
                {experience.map((e) => (
                  <div
                    key={e.id}
                    className="flex flex-col md:flex-row md:justify-between bg-[#1D1C20] p-3 md:p-0 rounded"
                  >
                    <div className="flex flex-col space-y-1 md:space-y-2">
                      <div className="text-[#FFFFFF] text-opacity-75 font-cascadia text-xs md:text-sm">
                        {e.name}
                      </div>
                      <div className="text-[#FFFFFF] text-opacity-60 font-cascadia text-xs">
                        {e.time}
                      </div>
                    </div>

                    <div className="text-[#FC874A] font-cascadia text-xs mt-2 md:mt-0">
                      {e.company}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full bg-[#181717] rounded-xl p-4 mt-4">
            <div className="w-full bg-[#181717] rounded-xl md:block hidden">
              <h1 className="font-cascadia text-md text-[#B0AAFF] md:px-4 pt-4">
                Tech Stack
              </h1>
              <div className="relative overflow-hidden w-full rounded-md">
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#181717] to-[transparent] z-10"></div>
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-r from-[transparent] to-[#181717] z-10"></div>
                <div className="flex animate-loop-scroll">
                  <div className="flex gap-x-4 py-4">
                    {[...TechStack, ...TechStack].map((t, index) => (
                      <div
                        className="flex-shrink-0 flex border border-[#372c45] bg-[#181717] hover:bg-[#372c45] rounded-full py-3 px-4 text-white items-center gap-x-4 cursor-pointer"
                        key={`tech-${index}`}
                        onClick={() => openInNewTab(t.link)}
                      >
                        <div className="w-5 h-5">
                          <img
                            src={t.logo}
                            alt={`${t.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="font-semibold text-sm font-cascadia">
                            {t.name}
                          </div>
                          <div className="text-xs font-cascadia">{t.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden w-full  ">
                <div className="absolute left-0 top-0 h-full w-24 rounded-xl bg-gradient-to-r from-[#181717] to-[transparent] z-10"></div>
                <div className="absolute right-0 top-0 h-full w-24 rounded-xl  bg-gradient-to-r from-[transparent] to-[#181717] z-10"></div>
                <div className="flex animate-loop-scroll-reverse">
                  <div className="flex gap-x-4 py-4">
                    {[...TechStack, ...TechStack].map((t, index) => (
                      <div
                        className="flex-shrink-0 flex border border-[#372c45] bg-[#181717] hover:bg-[#372c45] rounded-full py-3 px-4 text-white items-center gap-x-4 cursor-pointer"
                        key={`tech-${index}`}
                        onClick={() => openInNewTab(t.link)}
                      >
                        <div className="w-5 h-5">
                          <img
                            src={t.logo}
                            alt={`${t.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="font-semibold text-sm font-cascadia">
                            {t.name}
                          </div>
                          <div className="text-xs font-cascadia">{t.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#181717] rounded-xl block md:hidden">
              <h1 className="font-cascadia text-md text-[#B0AAFF] md:px-4 pt-4">
                Tech Stack
              </h1>
              <div className="relative overflow-hidden w-full rounded-md">
                <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#181717] to-[transparent] z-10"></div>
                <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-r from-[transparent] to-[#181717] z-10"></div>
                <div className="flex animate-loop-scroll2 whitespace-nowrap">
                  <div className="gap-x-4 py-4 inline-flex">
                    {[...TechStack, ...TechStack].map((t, index) => (
                      <div
                        className="flex-shrink-0  border border-[#372c45] bg-[#372c45] rounded-full py-3 px-4 text-white items-center gap-x-4 cursor-pointer inline-flex"
                        key={`tech-${index}`}
                        onClick={() => openInNewTab(t.link)}
                        style={{ transform: 'translateZ(0)' }}
                      >
                        <div className="w-5 h-5">
                          <img
                            src={t.logo}
                            alt={`${t.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden w-full  ">
                <div className="absolute left-0 top-0 h-full w-24 rounded-xl bg-gradient-to-r from-[#181717] to-[transparent] z-10"></div>
                <div className="absolute right-0 top-0 h-full w-24 rounded-xl  bg-gradient-to-r from-[transparent] to-[#181717] z-10"></div>
                <div className="flex animate-loop-scroll-reverse2">
                <div className="gap-x-4 py-4 inline-flex">
                {[...TechStack, ...TechStack].reverse().map((t, index) => (
                  <div
                    className="flex-shrink-0  border border-[#372c45] bg-[#372c45] rounded-full py-3 px-4 text-white items-center gap-x-4 cursor-pointer inline-flex"
                    key={`tech-${index}`}
                    onClick={() => openInNewTab(t.link)}
                    style={{ transform: 'translateZ(0)' }}
                  >
                    <div className="w-5 h-5">
                      <img
                        src={t.logo}
                        alt={`${t.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                  </div>
                ))}
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[80%] w-full flex md:flex-row flex-col mt-4 md:space-x-4 md:space-y-0 space-y-6">
            <div className="md:w-1/3 w-full bg-[#181717] rounded-xl p-4 flex justify-center items-center">
              <div className="w-full h-24  ">
                <img
                  src={git}
                  alt="git"
                  className="w-full h-full  object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col md:w-1/3 w-full justify-between space-y-3">
              <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl p-[1px]">
                <div className="mx-auto flex w-full max-w-lg items-center justify-center">
                  <div className="animate-rotate absolute inset-0 h-full w-full rounded-xl bg-[conic-gradient(#92D739_20deg,transparent_120deg)] p-4"></div>
                  <div className="w-full bg-[#181717] rounded-xl ">
                    <div className="flex flex-row relative justify-start items-center  border-[0.5px] border-[#D7F94D] w-full space-x-2  z-10   py-4 px-8  rounded-xl bg-[#181717] ">
                      <div className="w-3 h-3 rounded-xl bg-[#D7F94D]"></div>
                      <div className="md:text-xs text-base font-medium text-[#D7F94D] font-cascadia" onClick={() => openInNewTab("https://mail.google.com/mail/?view=cm&fs=1&to=saatvikadelli3@gmail.com")}>
                        Available for work
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#181717] rounded-xl p-4">
                <p className="text-[#B0AAFF] font-cascadia text-md">
                  Connect @
                </p>
                <p className="hover:text-[#D7F94D] hover:underline text-[#70C54E] cursor-pointer font-cascadia text-md"
                onClick={() => openInNewTab("https://mail.google.com/mail/?view=cm&fs=1&to=saatvikadelli3@gmail.com")}
                >
                  saatvikadelli3@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-row md:w-1/3 w-full space-x-4">
              <div className="w-full bg-[#181717] rounded-xl p-6 justify-center items-center flex cursor-pointer"
              onClick={() =>
                openInNewTab(
                  "https://www.linkedin.com/in/saatvika-delli-30a704288/"
                )
              }
              >
                <div>
                  <FaLinkedin className="w-8 h-8 hover:text-[#D7F94D] hover:underline text-[#70C54E]" />
                </div>
              </div>
              <div className="w-full bg-[#181717] rounded-xl p-6 justify-center items-center flex cursor-pointer"
              onClick={() =>
                openInNewTab(
                  "https://github.com/saatvikadelli"
                )
              }
              >
                <p>
                  <FaGithub className="w-8 h-8 hover:text-[#D7F94D] hover:underline text-[#70C54E]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
