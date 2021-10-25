import React, { Component } from "react";

class Carrousel extends Component {
  render(props) {
    return (
      <>
        <div className="carrousel">
          <img src={this.props.Imagen} alt="Imagen de platos" />
        </div>
      </>
    );
  }
}

export default Carrousel;
