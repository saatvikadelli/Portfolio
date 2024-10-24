import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { openInNewTab } from "../data";
const Navbar = () => {
  const navigate = useNavigate();
  
  

 

  return (
    <div>
      <div className="text-white md:flex flex-col  ">
        <div className="hover:text-[#C35A46] cursor-pointer flex" onClick={() => navigate("/")}>Home</div>
        <div className="hover:text-[#C35A46] cursor-pointer" onClick={() => navigate("/projects")}>Projects</div>
        <div className="hover:text-[#C35A46] cursor-pointer" onClick={() => navigate("/about")}>About</div>
        <div className="hover:text-[#C35A46] cursor-pointer" onClick={() => openInNewTab("/YSaatvika_Resume2024_fullstack_developer.pdf")}>Resume</div>
      </div>
      
     
    </div>
  );
};

export default Navbar;
