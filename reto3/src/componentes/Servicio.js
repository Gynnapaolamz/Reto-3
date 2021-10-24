import React,{Component} from 'react'
import "../css/bootstrap.min.css";
import "../css/imagen.css";


class Servicio extends Component{

render(props){

    return (
        <>
        <div className="card">
            <img src={this.props.imagen} className="card-img-top imgSize" alt="card-grid-image"/>
            <div className="card-body">
              <h5 className="card-title">{this.props.servicio}</h5>
              <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum libero in ipsum dignissim sagittis.
              </p>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Reserva en linea
              </button>
            </div>
          </div>
         
          </>
          )
    

}

}

export default Servicio;