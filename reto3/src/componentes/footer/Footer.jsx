import React from 'react';
import "./footer.css";
import logo from "../../media/logo@2x.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/css/headers.css";
import {GoogleMap,
        withScriptjs,
        withGoogleMap} from 'react-google-maps';


const Footer = () => {
    return (
        <div>
            <div className="bg-dark grid">
                <div className="container foto">
                   
                    <img src={logo} className="bi me-2" width="205" height="172"/>
                </div>
                <div className="container gridLetras">
                    <div>
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#" className="nav-link letras"><b>MAPA DEL SITIO</b></a></li>
                        <li className="nav-item"><a href="#" className="nav-link letras"><b>CONTÁCTANOS</b></a></li>
                        <li className="nav-item"><a href="#" className="nav-link letras"><b>RESERVAS</b></a></li>
                    </ul>
                    </div>
                    <div>
                    <p></p>
                    <p className="datos">Restaurante Sal & Salsa Ltda.<br></br>
                        Calle 19 No. 7 - 30, Bogotá <br></br> 
                        reservas@salysalsa.com <br></br> 
                        312 325 25 321 <br></br> 
                    </p>
                    </div>
                </div>
               

            </div> 
        </div>
    )
}

export default Footer
