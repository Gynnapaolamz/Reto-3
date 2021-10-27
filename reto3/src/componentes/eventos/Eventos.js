import React,{Component,} from 'react'
import Logo from "../../media/icono1@2x.png";
import Logo2 from "../../media/icono2@2x.png";
import Logo3 from "../../media/icono3@2x.png";
import Logo4 from "../../media/icono4@2x.png";
import Boton from "../../media/boton.png";
import foto3 from "../../media/foto3@2x.png";
import "../../css/bootstrap.min.css";
import "./eventos.css";
import {BrowserRouter as Router, 
  Route, 
  Switch, 
  Link} from "react-router-dom";


const Eventos = () => {
    
     return (
      <>
        <div className="container">
         <div className="titulo even-style-imagen2" id="eventos" >
          <h1>Organizamos tu evento</h1>
          </div>
           <div className="container-card">
              <div className="card" >
              <div className="img">
       <img src={Logo} className="card-img-top" alt="Logo1"/> </div>
  <div className="card-body">
    <h3>Fiestas Tematicas</h3>
    <p className="card-text">
      Contamos con las instalaciones para organizar tus eventos especiales, con la tematica e idea que desees.</p>
  </div>
  <Link to ="/servicios"><img className="boton" src={Boton}/></Link>
</div>

<div className="card" >
  <div className="img">
  <img src={Logo2} className="card-img-top" alt="Logo2"/> </div>
  <div className="card-body">
  <h3>Matrimonios</h3>
    <p className="card-text">Dejanos ser parte de este momento tan especial, organizando cada uno de los detalles para que sea el dia que soñaste siempre.</p>
  </div>
    <Link to ="/servicios"><img className="boton" src={Boton}/></Link>
</div>
<div className="card" >
  <div className="img">
  <img src={Logo3} className="card-img-top" alt="Logo3"/> </div>
  <div className="card-body">
    <h3>Cenas Empresariales</h3>
    <p className="card-text">Aqui puedes organizar tus eventos empresariales, comerciales y personales que requieras, con la mejor carta e instalaciones de la ciudad.</p>
      </div>
      <Link to ="/servicios"><img className="boton" src={Boton}/></Link>
</div>
<div className="card" >
  <div className="img">
  <img src={Logo4} className="card-img-top" alt="Logo4"/> </div>
  <div class="card-body">
  <h3>Cumpleaños</h3>
    <p className="card-text">Sabemos que es un día importante, puedes disfrutar de una cena especial y luego complementarla con unas copas en compañia de tus seres queridos.</p>
      </div>
      <Link to ="/servicios"><img className="boton" src={Boton}/></Link>
</div>
</div>
  </div>
          
            </> 
        );
      }

export default Eventos;