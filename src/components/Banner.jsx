import React from "react";
import "../styles/components/_banner.scss";
const Banner = ({ img, title }) => {
  return (
    <div className="banner">
      <img src={img} alt=" vue illutrant une falaise et une fôret" />
      {!title ? "" : <h1>{title}</h1>}
    </div>
  );
};

export default Banner;
