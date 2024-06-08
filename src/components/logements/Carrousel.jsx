import React from "react";

const Carrousel = ({ cover, title }) => {
  return (
    <div className="carrousel">
      <img src={cover} alt={title} />
    </div>
  );
};

export default Carrousel;
