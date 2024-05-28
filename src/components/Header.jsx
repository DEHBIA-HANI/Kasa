import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/components/_header.scss";
const Header = () => {
  return (
    <div className="header">
      <nav>
        <img src={logo} alt="logo Kasa" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
