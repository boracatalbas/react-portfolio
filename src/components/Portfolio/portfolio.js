import React, { useState } from "react";
import "./portfolio.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { project1, project2, project3, z } from "../../assets/assets";

export default function Portfolio() {
  const [count, setCount] = useState(1);
  const [prev, setPrev] = useState(count);

  const direction = count > prev ? "increasing" : "decreasing";

  const variants = {
    initial: { x: direction === "increasing" ? 1400 : -1400 },
    animate: { x: 0 },
    exit: { x: direction === "increasing" ? -1400 : 1400 },
  };

  const images = [project1, project2, project3, z];

  const handlePrevClick = () => {
    if (count > 0) {
      setCount(count - 1);
      setPrev(count);
    }
  };

  const handleNextClick = () => {
    if (count < 3) {
      setCount(count + 1);
      setPrev(count);
    }
  };

  return (
    <div className="portfolio">
      <div className="string">
        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          MY PROJECTS
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          YOU CAN SEE MY PROJECTS ON SLIDER!
        </motion.h2>
      </div>

      <div className="content">
        <div className="wrapper">
          <button onClick={handlePrevClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <AnimatePresence>
            <motion.img
              key={count}
              src={images[count]}
              alt="slider"
              variants={variants}
              className="slider"
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <button onClick={handleNextClick}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
