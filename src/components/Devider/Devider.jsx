import React from "react";
import PropTypes from "prop-types";

import "./devider.scss";

const Devider = ({ style }) => {
  return <div className="devider" style={style}></div>;
};

Devider.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

export default Devider;
