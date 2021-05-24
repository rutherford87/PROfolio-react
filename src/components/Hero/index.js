import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    </div>
  );
}

export default Hero;
