import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const info = ({ title, msg }) => {
  return (
    <div className="info">
      <div className="titleIcon">
        <h2>{title}</h2>
        <i>> {/* <FontAwesomeIcon icon="fa-solid fa-angle-up" /> */}</i>
      </div>

      <p>{msg}</p>
    </div>
  );
};

export default info;
