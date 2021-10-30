import React from 'react';
import "./footer.css";
import logo from "../../media/logo@2x.png";
import "../../css/bootstrap.min.css";
import "../../headers.css";
import {BrowserRouter as Router, 
    Route, 
    Switch, 
    Link} from "react-router-dom";


/*import {GoogleMap,
        withScriptjs,
        withGoogleMap} from 'react-google-maps';*/


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
                        <li className="nav-link"><Link to="/mapaSitio" className="nav-link text-white"><b>MAPA DEL SITIO</b></Link></li>
                        <li className="nav-link"><Link to="/contacto" className="nav-link text-white"><b>CONTÁCTANOS</b></Link></li>
                        <li className="nav-link"><Link to="/reservaLinea" className="nav-link text-white"><b>RESERVAS</b></Link></li>
                        
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
               {/* <div class="container">
                    <Maps/>
                 </div> */}

            </div> 
        </div>
    )
}

export default Footer
