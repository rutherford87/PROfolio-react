import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import "./style.css";



export const Jumbotron = () => (
<div>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
 
        <h1 className="welcome">Welcome to my Page</h1>
        <p className="sub-welcome">Use the links above to navigate</p>
     
    </Jumbo>
    <div >
    Full-stack developer interested in combining his background in engineering in the real life domain with the tech world. Recently earned a certificate in full stack development from University of Texas with focus on JavaScript, React.js, MERN stack, and database management.  Previously organized large capital projects in the oil and gas industry by writing detailed procedures for pre-job and intra-job success. Troubleshot issues during day to day operations with root cause analysis process and hands on  intervention. Looking forward to finding analogies between these workflows and software development workflows. 
    </div>
  </div>
)

export default Jumbotron;