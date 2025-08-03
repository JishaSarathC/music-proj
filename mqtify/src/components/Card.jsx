// src/components/Card.jsx

import React from "react";
import "./Card.css";
const Card = ({ image, title, follows, likes }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        {follows !== undefined && (
          <div className="card-tag">{follows} Follows</div>
        )}
        {likes !== undefined && (
          <div className="card-tag">{likes} Likes</div>
        )}
        <p className="card-title">{title}</p>
      </div>
    </div>
  );
};


export default Card;
