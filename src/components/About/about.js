import React from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { ben } from "../../assets/assets";

export default function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="string">
        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          ABOUT ME
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          HERE IS INFORMATIONS ABOUT ME!{" "}
        </motion.h2>
      </div>
      <div className="blocks">
        <div>
          <img src={ben} alt="ben" />
        </div>
        <div>
          <ul>
            <li className="subtitle"> INFO'S</li>
            <li className="sub-li">
              Name : <span>Bora</span>
            </li>
            <li className="sub-li">
              Surname : <span>Catalbas</span>
            </li>
            <li className="sub-li">
              Birthdate : <span>04.02.2003</span>
            </li>
            <li className="sub-li">
              Nationality : <span>Turkish</span>
            </li>
            <li className="sub-li">
              Location : <span>Istanbul</span>
            </li>
            <li className="sub-li">
              Languages : <span>Turkish ,English</span>
            </li>
          </ul>
        </div>
        <div className="languages">
          <ul className="wrap">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                background:
                  "linear-gradient(to right, #0cfc95 55%, transparent 65%)",
              }}
              transition={{ duration: 2.5 }}
            >
              HTML
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                background:
                  "linear-gradient(to right, #0cfc95 65%, transparent 75%)",
              }}
              transition={{ duration: 2.5, delay: 1 }}
            >
              CSS
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                background:
                  "linear-gradient(to right, #0cfc95 70%, transparent 80%)",
              }}
              transition={{ duration: 2.5, delay: 0.5 }}
            >
              Javascript
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                background:
                  "linear-gradient(to right, #0cfc95 80%, transparent 90%)",
              }}
              transition={{ duration: 2.5 }}
            >
              ReactJS
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                background:
                  "linear-gradient(to right, #0cfc95 40%, transparent 50%)",
              }}
              transition={{ duration: 2.5, delay: 1 }}
            >
              NextJS
            </motion.li>
          </ul>
        </div>
      </div>
      <div className="middle">
        <ul>
          <p className="title">Education</p>
          <motion.li
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <FontAwesomeIcon icon={faBookOpen} className="icon" />
            <div className="line-border">
              <h1>2017-2021</h1>

              <p>Yahya Kemal Beyatli Anatolian School</p>
              <br />
            </div>
          </motion.li>
          <motion.li
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <FontAwesomeIcon icon={faBookOpen} className="icon" />
            <div className="line-border">
              <h1>2021-2026</h1>
              <div>
                <p>Istanbul Aydin University</p>
                <p>Bachelor's Degree, Software Engineering</p>
                <br />
              </div>
            </div>
          </motion.li>
        </ul>
        <div className="right">
          <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <p className="title">Experience</p>
            <motion.li
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <FontAwesomeIcon icon={faBriefcase} className="icon" />
              <div className="line-border">
                <h1>2023</h1>

                <div>
                  <p>Vanora Ventures</p>
                  <p>Intern</p>
                  <br />
                </div>
              </div>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}
