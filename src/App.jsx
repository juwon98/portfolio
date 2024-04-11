import React from "react";
import { Helmet } from "react-helmet-async";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import Header from "./components/Header/Header";
import SectionTitle from "./components/SectionTitle/SectionsTitle";
import Button from "./components/Button/Button";
import ProjectPortfolio from "./components/ProjectItem/ProjectPortfolio";

import Thanks from "./assets/img/thanks.jpeg";
import User from "./assets/img/user-solid.svg";
import Calendar from "./assets/img/calendar-check-solid.svg";
import Envelope from "./assets/img/envelope-solid.svg";
import Location from "./assets/img/location-dot-solid.svg";
import Phone from "./assets/img/phone-solid.svg";
import School from "./assets/img/school-solid.svg";

import IconBasic from "./assets/img/skillsIcon/icon-basic.png";
import IconTS from "./assets/img/skillsIcon/icon-ts.svg";
import IconSASS from "./assets/img/skillsIcon/icon-sass.svg";
import IconReact from "./assets/img/skillsIcon/icon-react.svg";
import IconRedux from "./assets/img/skillsIcon/icon-redux.svg";
import IconZustand from "./assets/img/skillsIcon/icon-zustand.png";
import IconGit from "./assets/img/skillsIcon/icon-git.svg";
import IconGithub from "./assets/img/skillsIcon/icon-github.svg";
import IconNotion from "./assets/img/skillsIcon/icon-notion.svg";
import IconFigma from "./assets/img/skillsIcon/icon-figma.svg";
import IconVelog from "./assets/img/icon-velog.png";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Joowon's PortFolio</title>
      </Helmet>
      <Header />
      <div className="main-section">
        <img src={Thanks} alt="배경" id="main-background-image" />
        <div className="main-content">
          <div className="main-title-wrapper">
            <h1 className="main-title">
              장주원
              {<br />}
              프론트엔드 개발자
            </h1>
          </div>

          <div className="main-description-wrapper">
            <h2 className="main-description font-title-medium">asdf</h2>
            <Button
              type="more"
              label="더 알아보기"
              style={{ marginTop: "12px" }}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      <section className="aboutme-section">
        <div className="section-content aboutme-content">
          <SectionTitle label="About Me" />
          <div className="aboutme-infos-container">
            <div className="aboutme-info-wrapper">
              <img src={User} alt="사람" className="aboutme-icon" />
              <div className="aboutme-info">
                <h3 className="aboutme-info-title">이름</h3>
                <span className="aboutme-info-description">장주원</span>
              </div>
            </div>
            <div className="aboutme-info-wrapper">
              <img src={Calendar} alt="달력" className="aboutme-icon" />
              <div className="aboutme-info">
                <h3 className="aboutme-info-title">생년월일</h3>
                <span className="aboutme-info-description">1998.03.26</span>
              </div>
            </div>
            <div className="aboutme-info-wrapper">
              <img src={Phone} alt="전화" className="aboutme-icon" />
              <div className="aboutme-info">
                <h3 className="aboutme-info-title">연락처</h3>
                <span className="aboutme-info-description">010-3919-5284</span>
              </div>
            </div>
            <div className="aboutme-info-wrapper">
              <img src={Location} alt="주소" className="aboutme-icon" />
              <div className="aboutme-info">
                <h3 className="aboutme-info-title">주소지</h3>
                <span className="aboutme-info-description">
                  서울특별시 광진구
                </span>
              </div>
            </div>
            <div className="aboutme-info-wrapper">
              <img src={School} alt="학교" className="aboutme-icon" />
              <div className="aboutme-info">
                <h3 className="aboutme-info-title">학력</h3>
                <span className="aboutme-info-description">
                  세종대학교
                  {<br />}
                  컴퓨터공학과 졸업
                </span>
              </div>
            </div>
            <div className="aboutme-info-wrapper">
              <img src={Envelope} alt="메일" className="aboutme-icon" />
              <div className="aboutme-info">
                <h3 className="aboutme-info-title">e-mail</h3>
                <span className="aboutme-info-description">
                  wndnjs5248@hanmail.net
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-content skills-content">
          <SectionTitle label="Skills" />
          <div className="skills-detail-container">
            <div className="skills-category-container">
              <h3 className="skills-category">Frontend</h3>
              <ul className="skills-icon-wrapper">
                <li>
                  <img
                    src={IconBasic}
                    alt="IconBasic"
                    className="skills-icon"
                  />
                </li>

                <li>
                  <img src={IconTS} alt="IconTS" className="skills-icon" />
                </li>
                <li>
                  <img src={IconSASS} alt="IconSASS" className="skills-icon" />
                </li>
                <li>
                  <img
                    src={IconReact}
                    alt="IconReact"
                    className="skills-icon"
                  />
                </li>
                <li>
                  <img
                    src={IconRedux}
                    alt="IconRedux"
                    className="skills-icon"
                  />
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

      <section className="projects-section">
        <div className="section-content projects-content">
          <SectionTitle label="Projects" />
          <div className="projects-item-container">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <ProjectPortfolio />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectPortfolio />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectPortfolio />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="career-section">
        <div className="section-content career-content">
          <SectionTitle label="Career" />
        </div>
      </section>
    </div>
  );
};

export default App;
