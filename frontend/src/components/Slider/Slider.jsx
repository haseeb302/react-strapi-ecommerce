import React, { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlider] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlider(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlider(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} />
        <img src={data[1]} />
        <img src={data[2]} />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestIcon htmlColor="white" />
        </div>
        <div className="icon">
          <EastIcon htmlColor="white" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
