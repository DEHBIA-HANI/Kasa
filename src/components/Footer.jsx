import React from "react";
import logo from "../assets/images/logo1.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <img src={logo} alt="logo Kasa" />
        <p>
          <span>©</span> {new Date().getFullYear()} Kasa. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
