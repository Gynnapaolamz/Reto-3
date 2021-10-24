import React,{Component} from 'react'
import "../bootstrap.min.css";

class Servicio extends Component{

render(props){

    return (
        <>
        <div class="card"g>
            <img src={this.props.imagen} class="card-img-top imgSize" alt="card-grid-image"/>
            <div class="card-body">
              <h5 class="card-title">{this.props.servicio}</h5>
              <p class="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum libero in ipsum dignissim sagittis.
              </p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Reserva en linea
              </button>
            </div>
          </div>
          </>
          )
    

}

}

export default Servicio;