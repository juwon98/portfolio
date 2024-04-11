import "./skillssection.scss";

import React from "react";

import SectionTitle from "../../components/SectionTitle/SectionsTitle";

import IconBasic from "../../assets/img/skillsIcon/icon-basic.png";
import IconTS from "../../assets/img/skillsIcon/icon-ts.svg";
import IconSASS from "../../assets/img/skillsIcon/icon-sass.svg";
import IconReact from "../../assets/img/skillsIcon/icon-react.svg";
import IconRedux from "../../assets/img/skillsIcon/icon-redux.svg";
import IconZustand from "../../assets/img/skillsIcon/icon-zustand.png";
import IconGit from "../../assets/img/skillsIcon/icon-git.svg";
import IconGithub from "../../assets/img/skillsIcon/icon-github.svg";
import IconNotion from "../../assets/img/skillsIcon/icon-notion.svg";
import IconFigma from "../../assets/img/skillsIcon/icon-figma.svg";

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="section-content skills-content">
        <SectionTitle label="Skills" />
        <div className="skills-detail-container">
          <div className="skills-category-container">
            <h3 className="skills-category">Frontend</h3>
            <ul className="skills-icon-wrapper">
              <li>
                <img src={IconBasic} alt="IconBasic" className="skills-icon" />
              </li>

              <li>
                <img src={IconTS} alt="IconTS" className="skills-icon" />
              </li>
              <li>
                <img src={IconSASS} alt="IconSASS" className="skills-icon" />
              </li>
              <li>
                <img src={IconReact} alt="IconReact" className="skills-icon" />
              </li>
              <li>
                <img src={IconRedux} alt="IconRedux" className="skills-icon" />
              </li>
              <li>
                <img
                  src={IconZustand}
                  alt="IconZustand"
                  className="skills-icon"
                  style={{
                    transform: "scale(1.1)",
                  }}
                />
              </li>
            </ul>
          </div>
          <div className="skills-category-container">
            <h3 className="skills-category">Communication</h3>
            <ul className="skills-icon-wrapper">
              <li>
                <img
                  src={IconNotion}
                  alt="IconNotion"
                  className="skills-icon"
                />
              </li>
              <li>
                <img
                  src={IconFigma}
                  alt="IconFigma"
                  className="skills-icon"
                  style={{ transform: "scale(1.2)" }}
                />
              </li>
            </ul>
          </div>
          <div className="skills-category-container">
            <h3 className="skills-category">VCS</h3>
            <ul className="skills-icon-wrapper">
              <li>
                <img src={IconGit} alt="IconGit" className="skills-icon" />
              </li>
              <li>
                <img
                  src={IconGithub}
                  alt="IconGithub"
                  className="skills-icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
