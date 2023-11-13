import React from "react";
import sunny from "../assets/Sunny.svg"


function WeatherCard(props) {
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.day.city}</h3>
            <h5 className="card-text">{props.day.temperature}°C</h5>
            <h5 className="card-text">{props.day.forecast}</h5>
        </div>
    </div>
  );
};

export default WeatherCard;