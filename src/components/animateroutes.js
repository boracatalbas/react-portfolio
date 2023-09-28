import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header/header";
import About from "./About/about";
import Portfolio from "./Portfolio/portfolio";
import Contact from "./Contact/contact";

import { AnimatePresence } from "framer-motion";

export default function AnimateRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
