import React from "react";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import IconGithub from "../../assets/img/icon-velog.png";

import "./projectitem.scss";

const ProjectPortfolio = () => {
  return (
    <div className="project-item">
      <h2 className="project-title">asdf</h2>
      <p className="project-duration">asdfasdf</p>
      <div className="project-detail">
        <div className="project-detail-left">left</div>
        <div className="project-detail-right">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ type: "fraction", clickable: true }}
          >
            <SwiperSlide>
              <div className="project-image-container">
                <img
                  src={IconGithub}
                  alt="project-portfolio-image1"
                  className="project-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-image-container">
                <img
                  src={IconGithub}
                  alt="project-portfolio-image2"
                  className="project-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-image-container">
                <img
                  src={IconGithub}
                  alt="project-portfolio-image3"
                  className="project-image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectPortfolio;
