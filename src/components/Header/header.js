import React from "react";
import "./header.scss";
import { motion } from "framer-motion";
import { useTypingEffect } from "../../typing-effect";
import { reacticon, ben } from "../../assets/assets";

export default function Header() {
  const line2 = useTypingEffect("My Name Is ", 200);
  const line3 = useTypingEffect("Front-End React Developer", 250);

  const boxShadowVariants = {
    initial: {
      boxShadow: "5px 5px 5px rgba(240, 46, 170, 0.4)",
      transition: { duration: 1 },
    },
    animate: {
      boxShadow: [
        "rgba(12, 252, 149, 0.4) 5px 5px, #00ccff 10px 10px, #00ccff 10px 10px, #00ccff 20px 20px, #00ccff 15px 15px;",
        "rgba(12, 252, 149, 0.4) 5px 5px, rgba(12, 252, 149, 0.3) 10px 10px, rgba(12, 252, 149, 0.2) 15px 15px,rgba(12, 252, 149, 0.1) 20px 20px, rgba(12, 252, 149, 0.05) 25px 25px",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.div
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        src={reacticon}
        alt="reacticon"
        className="react"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <div className="left">
        <motion.div
          style={{ borderLeft: "solid 1px #0cfc95", paddingLeft: "1vw" }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi,
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {line2}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
            >
              Bora Catalbas
            </motion.span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="line3">{line3}</span>
          </motion.h1>
        </motion.div>
      </div>
      <div className="right">
        <motion.div>
          <motion.img
            initial="initial"
            animate="animate"
            variants={boxShadowVariants}
            src={ben}
            alt="me"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
