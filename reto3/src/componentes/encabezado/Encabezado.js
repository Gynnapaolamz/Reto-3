import React from 'react';
import "./Encabezado.css";
import logo from "../../media/logo@2x.png";
import cart from "../../media/cart.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/css/headers.css";

const Encabezado = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-md-1">
                    <a href="#" className="navbar-brand px-5"><img src={logo} width="89" height="70"/></a>
                </div>
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="#">Inicio</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Quienes somos</a>
                        <a className="nav-link" href="#">Menú</a>
                        <a className="nav-link" href="#">Servicios</a>
                        <a className="nav-link" href="#">Contactanos</a>
                        <a className="nav-link" href="#">Reserva en línea</a>
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                            <img src={cart}  width="18" height="18"/></a>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Encabezado
