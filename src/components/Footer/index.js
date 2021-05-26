import React from "react";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4>Created using the following:</h4>


            </div>
            <div className="col-md-3 col-sm-6">
              <h4>React-Bootstrap</h4>
              <ul className="list-unstyled">
                <li><a href="https://react-bootstrap.github.io/">Documentation</a></li>
              </ul>

            </div>

          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              Copyright 2021 - Tyler Rutherford Portfolio
        </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;