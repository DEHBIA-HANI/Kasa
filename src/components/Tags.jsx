import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      <ul>
        {tags.map((tag, index) => {
          return <li key={index}>{tag}</li>;
        })}
      </ul>
    </div>
  );
};

export default Tags;
