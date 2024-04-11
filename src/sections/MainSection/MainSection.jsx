import "./mainsection.scss";

import React from "react";

import Thanks from "../../assets/img/thanks.jpeg";
import Button from "../../components/Button/Button";

const MainSection = () => {
  return (
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
  );
};

export default MainSection;
