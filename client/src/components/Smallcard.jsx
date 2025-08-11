import React from 'react';
import './Smallcard.css';
import { useNavigate } from "react-router-dom";


const Smallcard = ({ image, title, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/video");                 
  };

  return (
    <div className="Smallcard">
      <img src={image} alt={title} />
      <div className="Smallcard-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="Button-watch-now" onClick={handleClick}>
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Smallcard;
