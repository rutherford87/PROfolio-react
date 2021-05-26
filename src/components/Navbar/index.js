import React from "react";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav class="navbar-top navbar navbar-expand-lg text-uppercase" id="mainNav">
    <div class="container">
        <a class="navbar-brand" href="/">PROfolio by Tyler Rutherford</a>
        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item mx-0 mx-lg-1"><a class="bland nav-link py-3 px-0 px-lg-3 rounded" href="/projects">Projects</a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="bland nav-link py-3 px-0 px-lg-3 rounded" href="/contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
  );
}

export default Navbar;