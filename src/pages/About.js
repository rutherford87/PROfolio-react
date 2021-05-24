import React from "react";
import Hero from "../components/Hero"

function About() {
    return (
        <Hero backgroundImage="./assets/skyline.jpg">
        
            <div class="container jumbotron">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        
        </div>
        </Hero>
    );
}

export default About;
  