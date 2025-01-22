import React from "react";
import "./CustCard.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="award-card">
      <div className="award-icon-wrapper">
        <span className="award-icon">{icon}</span>
      </div>
      <h3 className="award-title">{title}</h3>
      <p className="award-description">{description}</p>
    </div>
  );
};

export default Card;
