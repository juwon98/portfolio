import "./careersection.scss";

import React from "react";

import SectionTitle from "../../components/SectionTitle/SectionsTitle";

const CareerSection = () => {
  return (
    <section className="career-section">
      <div className="section-content career-content">
        <SectionTitle label="Career" />
      </div>
    </section>
  );
};

export default CareerSection;
