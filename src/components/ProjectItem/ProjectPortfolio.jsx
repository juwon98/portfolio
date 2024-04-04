import React from "react";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./projectitem.scss";

const ProjectPortfolio = () => {
  return (
    <div className="project-item">
      <h2 className="project-item-title">asdf</h2>
      <p className="project-item-duration">asdfasdf</p>
      <div className="project-item-detail">
        <div className="project-item-detail-left">left</div>
        <div className="project-item-detail-right">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ type: "fraction", clickable: true }}
          >
            <SwiperSlide>
              <img
                alt="project-portfolio-image1"
                className="project-item-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="project-portfolio-image2"
                className="project-item-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="project-portfolio-image3"
                className="project-item-image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectPortfolio;
