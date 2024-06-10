import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Carrousel = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    const newIndex =
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex =
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="carrousel">
      <img src={pictures[currentIndex]} alt={title} />

      <div className="container_next_prev_image">
        <i className="prev" onClick={prevImage}>
          {" "}
          <FontAwesomeIcon icon={faAngleLeft} />
        </i>

        <i className="next" onClick={nextImage}>
          <FontAwesomeIcon icon={faAngleRight} />
        </i>
      </div>
      <span>
        {currentIndex + 1}/{pictures.length}
      </span>
    </div>
  );
};

export default Carrousel;
