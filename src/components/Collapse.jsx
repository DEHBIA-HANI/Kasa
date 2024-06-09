import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
const Collapse = ({ title, msg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="info">
      <div className="titleIcon">
        <h2>{title}</h2>
        <i
          onClick={toggleOpen}
          style={{
            transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform 0.4s",
          }}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </i>
      </div>

      {isOpen && <p>{msg}</p>}
    </div>
  );
};

export default Collapse;
