import React from "react";
import "./content.scss";

import AnimateRoutes from "../../components/animateroutes";
import { imgLogo } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Content({ isNavbarOpen, toggleNavbar }) {
  return (
    <div className={`content ${isNavbarOpen ? "open" : ""}`}>
      <div className="upper-navbar">
        <div className="logo">
          <img src={imgLogo} alt="x" />
        </div>
        <div className="menu-bar">
          <button onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      <AnimateRoutes />
    </div>
  );
}
