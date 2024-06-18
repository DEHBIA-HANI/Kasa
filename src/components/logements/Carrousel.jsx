import React, { useState } from "react";
import ArrowBack from "../../assets/images/arrow_back.png";
import ArrowForward from "../../assets/images/arrow_forward.png";

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
      {pictures.length > 1 && (
        <>
          <div className="container_next_prev_image">
            <i className="prev" onClick={prevImage}>
              <img src={ArrowBack} alt="arrow left" />
            </i>

            <i className="next" onClick={nextImage}>
              <img src={ArrowForward} alt="arrow right" />
            </i>
          </div>
          <span>
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
};

export default Carrousel;
