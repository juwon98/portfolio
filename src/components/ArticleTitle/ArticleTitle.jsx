import React from "react";
import PropTypes from "prop-types";

import Devider from "../Devider/Devider";

import MagnifyingGlass from "../../assets/img/magnifying-glass-solid.svg";

import "./articletitle.scss";

const ArticleTitle = ({ label }) => {
  return (
    <div className="article-title-container">
      <div className="article-title-wrapper">
        <img
          src={MagnifyingGlass}
          alt="돋보기"
          className="magnifying-glass-icon"
        />
        <h2 className="article-title">{label}</h2>
      </div>
      <Devider style={{ margin: "24px 0px 48px 0px" }} />
    </div>
  );
};

ArticleTitle.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

export default ArticleTitle;
