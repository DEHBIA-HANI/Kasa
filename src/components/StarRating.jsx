import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {
  return (
    <div className="star">
      {[...Array(5)].map((_, index) => {
        return (
          <i key={index}>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: index < rating ? "#ff6060" : "" }}
            />
          </i>
        );
      })}
    </div>
  );
};

export default StarRating;
