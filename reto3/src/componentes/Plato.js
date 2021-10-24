import React,{Component} from 'react'
import "../css/bootstrap.min.css";
import "../css/imagen.css";
const spanStyles = {

    width: '14rem'

  };
class Plato extends Component{

render(props){

    return (
        <>
        <div className="card shadow mb-1 rounded" style={spanStyles}>
            <img src={this.props.imagen}  alt="card-grid-image"/>
            <div className="card-body">
              <h5 className="card-title">{this.props.platoName}</h5>
              <p className="card-text">{this.props.platoDescripcion}
              </p>
              <p className="card-text">${this.props.precio}
              </p>
              <input class="numero" type="number" min="1" value="1"/>
              <br></br>
              <br></br>
              
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Añadir al carrito
              </button>
            </div>
          </div>
          </>
          )
}

}

export default Plato;