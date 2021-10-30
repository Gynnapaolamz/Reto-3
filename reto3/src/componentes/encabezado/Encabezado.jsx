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
            <nav className="navbar navbar-expand-lg   gridHeader">
                <div className="logoColum">
                    <Link to="/"className="navbar-brand px-5"><img src={logo} width="100" height="80"/></Link>
                </div>
                <div className="container-fluid px-5">
                    <Link className="navbar-brand" to="/">Inicio</Link>
                    <Link className="navbar-brand" to="/nosotros">Quienes Somos</Link>
                    <Link className="navbar-brand" to="/menu">Menú</Link>
                    <Link className="navbar-brand" to="/servicios">Servicios</Link>
                    <Link className="navbar-brand" to="/contacto">Contactanos</Link>
                    <Link className="navbar-brand" to="/reservaLinea">Reservar en Línea</Link>
                    <Link className="navbar-brand disabled" to="/cart" tabindex="-1" aria-disabled="true">
                        <img src={cart}  width="40" height="40"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> 
            </div>
        </nav>
        </div>
    )
}

export default Encabezado
