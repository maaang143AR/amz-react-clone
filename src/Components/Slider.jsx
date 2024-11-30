import React from "react";
import { useState } from "react";
import slider1 from "../Images/slider1.jpg";
import slider2 from "../Images/slider2.jpg";
import slider3 from "../Images/slider3.jpg";

const Slider = () => {
  let [currentIndex, setCurrentIndex] = useState();

  const sliders = [{ img: slider1 }, { img: slider2 }, { img: slider3 }];
  const mainStyle = {
    width: "100%",
    height: "350px",
    backgroundSize: "cover",
    backgroundColor: "black",
  };
  return (
    
      <div style={mainStyle}>

        {sliders.map((slide, index) => (
          <img src={slide.img} style={{ height: "300px", width: "300px" }} />
        ))}
        
      </div>

  );
};

export default Slider;
