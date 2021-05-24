import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"

import './App.css';

function App() {
  return (
    <div className="App">


        <Router>
          <div>

            <Wrapper>
              <Navbar />
              <Route exact path="/" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/projects" component={Projects} />
            </Wrapper>
                  </div>
        </Router>

 
    </div>
  );
}

export default App;
