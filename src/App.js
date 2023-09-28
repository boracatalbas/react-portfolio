import React, { useState, useEffect } from "react";
import "./App.scss";

import { PacmanLoader } from "react-spinners";
import { motion } from "framer-motion";
import Navbar from "./layout/navbar/navbar";
import Content from "./layout/content/content";

export default function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={`App ${isNavbarOpen ? "navbar-open" : ""}`}>
      {loading ? (
        <div
          className="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <PacmanLoader color="#36d7b7" loading={loading} size={20} />
        </div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="navbar"
          >
            <Navbar
              isNavbarOpen={isNavbarOpen}
              toggleNavbar={() => setIsNavbarOpen(!isNavbarOpen)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <div className="content">
              {" "}
              <Content
                isNavbarOpen={isNavbarOpen}
                toggleNavbar={() => setIsNavbarOpen(!isNavbarOpen)}
              />
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
