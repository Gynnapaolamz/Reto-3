import React from 'react';
import "./Encabezado.css";
import logo from "../../media/logo@2x.png";
import cart from "../../media/cart.png";
import "../../css/bootstrap.min.css";
import {BrowserRouter as Router, 
    Route, 
    Switch, 
    Link} from "react-router-dom";

const Encabezado = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light gridHeader">
                <div className="logoColum">
                    <Link to="/"className="navbar-brand px-5"><img src={logo} width="89" height="70"/></Link>
                </div>
                <div className="container-fluid px-5">
                    <Link className="navbar-brand" to="/">Inicio</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                <div className="collapse navbar-collapse accColum" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/nosotros">Quienes somos</Link>
                        <Link className="nav-link" to="/menu">Menú</Link>
                        <Link className="nav-link" to="/servicios">Servicios</Link>
                        <Link className="nav-link" to="/contacto">Contactanos</Link>
                        <Link className="nav-link" to="/reservaLinea">Reserva en línea</Link>
                        <Link className="nav-link disabled" to="/cart" tabindex="-1" aria-disabled="true">
                            <img src={cart}  width="18" height="18"/></Link>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Encabezado
