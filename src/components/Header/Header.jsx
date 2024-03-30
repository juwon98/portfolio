import React, { useEffect, useState } from "react";

import "./header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight); // 스크롤이 100vh 이상 true
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <h2 className="header-title font-title-large">JooWon's Portfolio</h2>
        <div className="header-right-container">
          <h3 className="header-right-item font-title-small">About me</h3>
          <h3 className="header-right-item font-title-small">Skills</h3>
          <h3 className="header-right-item font-title-small">Archive</h3>
          <h3 className="header-right-item font-title-small">Projects</h3>
          <h3 className="header-right-item font-title-small">Career</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
