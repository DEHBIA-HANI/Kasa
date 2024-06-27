import React from "react";
import starActive from "../assets/images/star-active.png";
import starInactive from "../assets/images/star-inactive.png";

const StarRating = ({ rating }) => {
  return (
    <div className="star">
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index}>
            <img
              src={index < rating ? starActive : starInactive}
              alt=""
              style={{ color: index < rating ? "#ff6060" : "" }}
            />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
