import { Helmet } from "react-helmet-async";
import Header from "./components/Header/Header";
import Main from "./sections/MainSection/Main";
import Aboutme from "./sections/AboutmeSection/Aboutme";
import Skills from "./sections/SkillSection/Skills";
import Archive from "./sections/ArchiveSection/Archive";
import Projects from "./sections/ProjectSection/Projects";
import Career from "./sections/CareerSection/Career";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Joowon's PortFolio</title>
      </Helmet>
      <Header />
      <div className="main-container">
        <Main />
        <Aboutme />
        <Skills />
        <Archive />
        <Projects />
        <Career />
      </div>
    </div>
  );
}

export default App;
