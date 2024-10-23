import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
