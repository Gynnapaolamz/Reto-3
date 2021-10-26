import React, { Component } from "react";

const Carrousel = (props) => {
 
    return (
      <>
        <div className="carrousel">
          <img src={props.image} alt="Imagen de platos" />
        </div>
      </>
    );
  }

export default Carrousel;
