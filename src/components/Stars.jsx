import React from "react";

// eslint-disable-next-line react/prop-types
const Stars = ({ Stars }) => {
  const starsArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="stars fs-5 d-flex ">
      {starsArray.map((_, index) => (
        <p
          key={index}
          className={index < Stars ? "coloredStars" : "notColoredStars"}
        >
          &#9733;
        </p>
      ))}
    </div>
  );
};

export default Stars;
