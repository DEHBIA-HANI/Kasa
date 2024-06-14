import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ fichiers }) => {
  return (
    <div className="gallery">
      {fichiers.map((fichier) => (
        <Link to={`/fichiers/${fichier.id}`} className="card" key={fichier.id}>
          <div className="image-container">
            <img src={fichier.cover} alt={fichier.title} />
            <div className="title">
              <h2>{fichier.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
Card.propTypes = {
  fichier: PropTypes.array.isRequired,
};
export default Card;
