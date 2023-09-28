import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import "./contact.scss";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="string">
        <h1>GET IN TOUCH</h1>
        <h2>I'M ALWAYS OPEN TO NEW IDEAS! </h2>
      </div>
      <div className="boxes">
        <div className="box">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{
              borderRadius: "50%",
              backgroundColor: "white",
              color: "black",
              padding: "2vh",
              marginRight: "3vh",
            }}
          />
          <div>
            <h2>Linkedin</h2>
            <p>@boracatalbas</p>
          </div>
        </div>
        <div className="box">
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              borderRadius: "50%",
              backgroundColor: "white",
              color: "black",
              padding: "2vh",
              marginRight: "3vh",
            }}
            className="icon"
          />
          <div>
            <h2>Github</h2>
            <p>@boracatalbas</p>
          </div>
        </div>
        <div className="box">
          <FontAwesomeIcon
            icon={faMap}
            style={{
              borderRadius: "50%",
              backgroundColor: "white",
              color: "black",
              padding: "2vh",
              marginRight: "3vh",
            }}
          />
          <div>
            <h2>Levent</h2>
            <p>Istanbul ,Turkey</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.7416923337137!2d29.015830975583444!3d41.07463861533686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab641a58c09b5%3A0xb868d376ad5825ad!2zTmlzYmV0aXllLCBGZWNyaSBFYmNpb8SfbHUgU2suIDQtMjAsIDM0MzQwIEJlxZ9pa3RhxZ8vxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1695297214527!5m2!1str!2str"
          title="z"
        ></iframe>
        <div className="copyright">© 2023 Created by Bora Catalbas</div>
      </div>
    </motion.div>
  );
}
