import React, { Component } from "react";
import "./fourpart.css";
import pump1 from "/pump1.png";
import pump2 from "/pump2.png";
import Coupling from "/Coupling.png";


function FourtPart() {
  return (
    <>
    <h2>DigitalTwin</h2>
      <div className="container">
        <div className="item">
          <video controls width="100%">
            <source src="/ANIMATION.mp4" type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
        </div>
        <div className="item">
        <img style={{width:"100%",}} src={pump1} alt="Pump Image" />
        </div>
        <div className="item">
        <img style={{width:"100%",}} src={pump2} alt="Pump Image" />
        </div>
        <div className="item">
        <img style={{width:"20%",}} src={Coupling} alt="Pump Image" />
        <h4>Coupling</h4>
        </div>
      </div>
    </>
  );
}

export default FourtPart;
