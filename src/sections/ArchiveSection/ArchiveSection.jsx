import "./archivesection.scss";

import React from "react";

import SectionTitle from "../../components/SectionTitle/SectionsTitle";

import IconGithub from "../../assets/img/skillsIcon/icon-github.svg";
import IconVelog from "../../assets/img/icon-velog.png";

const ArchiveSection = () => {
  return (
    <section className="archive-section">
      <div className="section-content archive-content">
        <SectionTitle label="Archive" />

        <div className="archive-container">
          <div className="archive-inner-container">
            <img src={IconGithub} alt="IconGithub" className="archive-icon" />
            <a
              href="https://github.com/juwon98"
              target="_blank"
              rel="noopener noreferrer"
              className="archive-link"
            >
              https://github.com/juwon98
            </a>

            <ul className="archive-description">
              <li className="archive-description-item">• asdf</li>
              <li className="archive-description-item">• asdf</li>
              <li className="archive-description-item">• asdf</li>
            </ul>
          </div>
          <div className="archive-inner-container">
            <img src={IconVelog} alt="IconVelog" className="archive-icon" />
            <a
              href="https://velog.io/@juwon98/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="archive-link"
            >
              https://velog.io/@juwon98/posts
            </a>
            <ul className="archive-description">
              <li className="archive-description-item">• asdf</li>
              <li className="archive-description-item">• asdf</li>
              <li className="archive-description-item">• asdf</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchiveSection;
