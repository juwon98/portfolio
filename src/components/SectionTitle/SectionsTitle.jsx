import React from "react";
import PropTypes from "prop-types";

import Devider from "../Devider/Devider";

import MagnifyingGlass from "../../assets/img/magnifying-glass-solid.svg";

import "./sectiontitle.scss";

const SectionTitle = ({ label }) => {
  return (
    <div className="section-title-container">
      <div className="section-title-wrapper">
        <img
          src={MagnifyingGlass}
          alt="돋보기"
          className="magnifying-glass-icon"
        />
        <h2 className="section-title">{label}</h2>
      </div>
      <Devider style={{ margin: "24px 0px 60px 0px" }} />
    </div>
  );
};

SectionTitle.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

export default SectionTitle;
