import React, { useState } from "react";
import slider1 from "../Images/slider1.jpg";
import slider2 from "../Images/slider2.jpg";
import slider3 from "../Images/slider3.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliders = [slider1, slider2, slider3];

  // Handlers for navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliders.length - 1 : prevIndex - 1
    );
  };

  const containerStyle = {
    width: "100%",
    height: "350px",
    position: "relative",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    width: "90%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const buttonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    zIndex: 1,
  };

  return (
    <div style={containerStyle}>
      {/* Display Current Image */}
      <img
        src={sliders[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={imageStyle}
      />

      {/* Previous Button */}
      <button
        style={{ ...buttonStyle, left: "10px" }}
        onClick={handlePrevious}
      >
        &#10094; {/* Left Arrow */}
      </button>

      {/* Next Button */}
      <button
        style={{ ...buttonStyle, right: "10px" }}
        onClick={handleNext}
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Slider;
