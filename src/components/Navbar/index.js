import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        PROfolio
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;