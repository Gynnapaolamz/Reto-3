import React, { Component } from "react";
import "../../src/css/bootstrap.min.css";
import "../css/carrousel.css"
import {BrowserRouter as Router, 
    Route, 
    Switch, 
    Link} from "react-router-dom";

const Carrousel = () => {
 
    return (
      <>
      <div className="container-carr"> 

      <div id="carouselWithInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/img1.png?alt=media&token=f5b4e48c-647e-4670-85aa-32f33249fd4f" className="d-block w-60" alt="menus1"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/img2.png?alt=media&token=00916bce-108b-45ce-ac32-208c40fd254c" className="d-block w-60" alt="menus2"/>
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/img7.png?alt=media&token=c03bb091-abb3-4eaa-b061-82ead492d8c6" className="d-block w-60" alt="menus3"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselWithInterval" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselWithInterval" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
      </div>

      </>
    );
  }

export default Carrousel;
