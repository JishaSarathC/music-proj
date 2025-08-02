import React from "react";
import "./Hero.css";
import headphoneImg from "../assets/vibrating-headphone 1.svg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text-content">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands of podcast episodes</h1>
      </div>
      <img
        src={headphoneImg}
        alt="Vibrating Headphones"
        className="hero-headphone"
      />
    </div>
  );
};

export default Hero;
