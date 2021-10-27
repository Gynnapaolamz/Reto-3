import React, { Component } from "react";
import "../../src/css/bootstrap.min.css";
import Imagen1 from "../../src/media/img1.png";
import Imagen2 from "../../src/media/img2.png";
import Imagen3 from "../../src/media/img3.png";
import Imagen4 from "../../src/media/img4.png";
import Imagen5 from "../../src/media/img5.png";
import "../css/carousel.css"

const Carrousel = () => {
 
    return (
      <>

      <div className="container">

        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="10000">
      <img src={Imagen1} className="d-block w-100" alt="Imagen 1"/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src={Imagen2} className="d-block w-100" alt="Imagen 2"/>
    </div>
    <div className="carousel-item">
      <img src={Imagen3} className="d-block w-100" alt="Imagen 3"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
      </>
    );
  }

export default Carrousel;
