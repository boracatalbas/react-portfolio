import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { imgLogo } from "../../assets/assets";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ isNavbarOpen, toggleNavbar }) {
  return (
    <motion.div className={`navbar ${isNavbarOpen ? "open" : ""}`}>
      <div className="logo">
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          className="logo"
        >
          <Link to="/">
            <img src={imgLogo} alt="x" />
          </Link>
        </motion.div>
      </div>

      <div className={`menu ${isNavbarOpen ? "open" : ""}`}>
        <motion.button
          onClick={toggleNavbar}
          className="resButton"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FontAwesomeIcon icon={faBars} />
        </motion.button>
        <motion.ul
          onClick={toggleNavbar}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <li>
            <Link to="/">Start</Link>
          </li>
          <li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Link to="/projects">Portfolio</Link>
          </li>
          <li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </motion.ul>
      </div>
      <div className="links">
        <motion.div className="icons">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a href="https://www.facebook.com/" target="blank">
              <FontAwesomeIcon icon={faFacebook} className="icon" size="l" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a href="https://twitter.com/boracatalbass" target="blank">
              <FontAwesomeIcon icon={faXTwitter} className="icon" size="l" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a href="https://www.instagram.com/boracatalbass/" target="blank">
              <FontAwesomeIcon icon={faInstagram} className="icon" size="l" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a href="https://github.com/boracatalbas" target="blank">
              <FontAwesomeIcon icon={faGithub} className="icon" size="l" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <a
              href="https://www.linkedin.com/in/bora-%C3%A7atalba%C5%9F-32888a219/"
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" size="l" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
