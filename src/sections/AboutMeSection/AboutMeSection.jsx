import "./aboutmesection.scss";

import React from "react";

import SectionTitle from "../../components/SectionTitle/SectionsTitle";
import User from "../../assets/img/user-solid.svg";
import Calendar from "../../assets/img/calendar-check-solid.svg";
import Envelope from "../../assets/img/envelope-solid.svg";
import Location from "../../assets/img/location-dot-solid.svg";
import Phone from "../../assets/img/phone-solid.svg";
import School from "../../assets/img/school-solid.svg";

const AboutMeSection = () => {
  return (
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
  );
};

export default AboutMeSection;
