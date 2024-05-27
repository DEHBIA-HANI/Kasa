import React from "react";

const Banner = (img, title) => {
  return (
    <div className="banner">
      <img src={img} alt="image illutrant une falaise et une fôret" />
      {!title ? "" : <h1>{title}</h1>}
    </div>
  );
};

export default Banner;
