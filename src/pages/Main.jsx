import React, { useState } from "react";
import Navbar from "../components/Navbar";
import saa from "../assets/saastvi.svg";
import saa2 from "../assets/saaaa.jpg"
import { abilities } from "../data/home";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const [selectedId, setSelectedId] = useState(1);
  const navigate = useNavigate()
  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const selectedAbility = abilities.find(
    (ability) => ability.id === selectedId
  );
  return (
    <div className="relative h-full">
      <div className="flex   w-full ">
        <div className="flex md:flex-row flex-col md:justify-start md:items-start justify-center items-center md:gap-x-10  w-full  ">
          <div
            className="md:w-[130px] md:h-[123px] w-[130px] h-[123px] border border-[#FF8140]   rounded-full"
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
              src={saa2}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col md:justify-between justify-center md:mt-0 mt-6 md:items-start items-center md:gap-y-20  w-full">
            <div className="flex flex-col md:gap-y-6 justify-center items-center md:justify-start md:items-start">
              <div className="relative">
                <div
                  className="font-warpen md:text-4xl text-xl md:block hidden absolute top-0 md:left-0 left-1 z-0"
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
                  className="font-warpen md:text-4xl text-xl color-text cursor-pointer"
                  data-text="SAATVIKA DELLI"
                   onClick={()=>navigate('/')}
                >
                  SAATVIKA DELLI
                </div>
              </div>
              <div className="w-full md:text-left text-center">
                <div className="font-cascadia text-xl">
                  {" { "} Full Stack Dev {" } "}{" "}
                </div>
                <div className="px-10 md:px-0 flex item-start justify-start md:pt-20 pt-10 font-cascadia  md:gap-x-20 gap-x-4">
                  {abilities.map((ability) => (
                    <div
                      className="flex flex-col items-start justify-start gap-y-4"
                      key={ability.id}
                      onClick={() => handleSelect(ability.id)}
                    >
                      <div
                        className={`bg-[#111111] ${
                          selectedAbility.id === ability.id
                            ? "border-2 border-[#C35A46]"
                            : ""
                        } rounded-xl shadow-inner w-16 cursor-pointer h-16 flex text-2xl justify-center items-center`}
                      >
                        <div className="w-10 h-10">
                          <img
                            src={ability.logo}
                            alt={`${ability.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      {/* <div className={`cursor-pointer font-cascadia text-md ${
                        selectedAbility.id === ability.id
                          ? "text-[#C35A46]"
                          : "colorOpa"
                      } `}>{ability.name}</div>*/}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 justify-center items-center md:justify-start md:items-start mt-6">
              <div className="md:text-2xl text-xl text-[#B0AAFF] font-cascadia">
                {selectedAbility.name} /~
              </div>
              <div className="md:text-lg text-base px-4 md:px-0 md:leading-8 text-opacity-50 text-white md:w-[60%] font-cascadia md:text-left text-justify ">
                {selectedAbility.details}
              </div>
            </div>
            <div className="flex md:hidden text-center text-[#B0AAFF] text-lg font-cascadia mt-4 justify-center items-center" onClick={()=>{navigate("/projects")}}>
           {"{"} projects  <span className=" text-[#70C54E] underline">
           <MdArrowOutward className="w-5 h-5"/>
         </span> {"}"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
