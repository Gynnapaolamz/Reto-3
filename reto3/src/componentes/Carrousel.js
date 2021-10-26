import React, { Component } from "react";
import "../../src/css/bootstrap.min.css";
import Imagen1 from "../../src/media/img1";
import Imagen2 from "../../src/media/img2";
import Imagen3 from "../../src/media/img3";
import Imagen4 from "../../src/media/img4";
import Imagen5 from "../../src/media/img5";

const Carrousel = () => {
 
    return (
      <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Imagen1}/>
              </div>
              <div className="carousel-item">
                <img src={Imagen2}/>
              </div>
              <div className="carousel-item">
                <img src={Imagen3}/>
              </div>
              <div className="carousel-item">
                <img src={Imagen4}/>
              </div>
              <div className="carousel-item">
                <img src={Imagen5}/>
              </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
      </>
    );
  }

export default Carrousel;
