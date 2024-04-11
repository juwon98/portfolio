import "./projectssection.scss";

import React from "react";

import SectionTitle from "../../components/SectionTitle/SectionsTitle";
import ProjectPortfolio from "../../components/ProjectItem/ProjectPortfolio";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const ProjectsSection = () => {
  return (
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
  );
};

export default ProjectsSection;
