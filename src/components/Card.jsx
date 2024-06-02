import React from "react";
import PropTypes from "prop-types";

const Card = ({ fichiers }) => {
  return (
    <div className="gallery">
      {fichiers.map((fichier) => (
        <div className="card" key={fichier.id}>
          <div className="image-container">
            <img src={fichier.cover} alt={fichier.title} />
            <h3>{fichier.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
Card.propTypes = {
  fichier: PropTypes.array.isRequired,
};
export default Card;
