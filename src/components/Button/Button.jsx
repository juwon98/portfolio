import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ type, label, style, onClick }) => {
  return (
    <button className={`button ${type}`} style={style}>
      {label}
      <div className="dim"></div>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["more"]).isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
};

export default Button;
