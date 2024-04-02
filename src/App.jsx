import { Helmet } from "react-helmet-async";

import Header from "./components/Header/Header";
import Devider from "./components/Devider/Devider";
import Button from "./components/Button/Button";

import Thanks from "./assets/img/thanks.jpeg";
import User from "./assets/img/user-solid.svg";
import Calendar from "./assets/img/calendar-check-solid.svg";
import Envelope from "./assets/img/envelope-solid.svg";
import Location from "./assets/img/location-dot-solid.svg";
import MagnifyingGlass from "./assets/img/magnifying-glass-solid.svg";
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

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Joowon's PortFolio</title>
      </Helmet>
      <Header />
      <div className="main-article">
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

      <article className="aboutme-article">
        <div className="aboutme-content">
          <div className="aboutme-title-container">
            <div className="aboutme-title-wrapper">
              <img
                src={MagnifyingGlass}
                alt="돋보기"
                className="magnifying-glass-icon"
              />
              <h2 className="aboutme-title">About Me</h2>
            </div>
            <Devider style={{ margin: "24px 0px 48px 0px" }} />
          </div>
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
      </article>

      <article className="skills-article">
        <div className="skills-content">
          <div className="skills-title-container">
            <div className="skills-title-wrapper">
              <img
                src={MagnifyingGlass}
                alt="돋보기"
                className="magnifying-glass-icon"
              />
              <h2 className="skills-title">Skills</h2>
            </div>
            <Devider style={{ margin: "24px 0px 48px 0px" }} />
          </div>

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
      </article>

      <article className="archive-article"></article>

      <article className="projects-article"></article>

      <article className="career-article"></article>
    </div>
  );
}

export default App;
