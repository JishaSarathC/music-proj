import React from "react";
import { Chip } from "@mui/material";
import "./Card.css";

const Card = ({ image, follows, title , isSong}) => {
  return (
    <div className="album-card">
      <img src={image} alt={title} className="album-image" />
      <Chip
        label={`${follows} Follows`}
        className="follow-chip"
        size="small"
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "#121212",
          color: "white",
          fontSize: "12px",
        }}
      />
      <p className="album-name">{title}</p>
       <div className="card">
      <img src={image} alt={title} />
      <div className="card-info">
        <span className="chip">{isSong ? `${follows} Likes` : `${follows} Follows`}</span>
        <p>{title}</p>
      </div>
    </div>
    </div>
  );
};

export default Card;
