import "./App.scss";

import React from "react";
import { Helmet } from "react-helmet-async";

import Header from "./components/Header/Header";

import MainSection from "./sections/MainSection/MainSection";
import AboutMeSection from "./sections/AboutMeSection/AboutMeSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";
import ArchiveSection from "./sections/ArchiveSection/ArchiveSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import CareerSection from "./sections/CareerSection/CareerSection";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Joowon's PortFolio</title>
      </Helmet>
      <Header />
      <MainSection />
      <AboutMeSection />
      <SkillsSection />
      <ArchiveSection />
      <ProjectsSection />
      <CareerSection />
    </div>
  );
};

export default App;
