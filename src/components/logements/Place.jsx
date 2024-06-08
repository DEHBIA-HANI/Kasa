import React from "react";

const Place = ({ title, location }) => {
  return (
    <div className="part_place">
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  );
};

export default Place;
