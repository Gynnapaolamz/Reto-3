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
                 <h1> <strong>Organizamos tu evento</strong></h1>
              </div>
              
              <div className="container-card">
              <div className="card" >
  <img src={Logo} className="card-img-top" alt="Logo1"/>
  <div className="card-body">
    <h2>Fiestas Tematicas</h2>
    <p className="card-text">
      Contamos con las instalaciones para organizar tus eventos especiales, con la tematica e idea que desees.</p>
    <Link to ="/servicios"><img className="boton" src={Boton}/></Link>
  </div>
</div>

<div className="card" >
  <img src={Logo2} className="card-img-top" alt="Logo2"/>
  <div className="card-body">
  <h2>Matrimonios</h2>
    <p className="card-text">Dejanos ser parte de este momento tan especial, organizando cada uno de los detalles para que sea el dia que soñaste siempre.</p>
    <Link to ="/servicios"><img className="boton" src={Boton}/></Link>
  </div>
</div>
<div className="card" >
  <img src={Logo3} className="card-img-top" alt="Logo3"/>
  <div className="card-body">
    <h2>Cenas Empresariales</h2>
    <p className="card-text">Aqui puedes organizar tus eventos empresariales, comerciales y personales que requieras, con la mejor carta e instalaciones de la ciudad.</p>
    <Link to ="/servicios"><img className="boton" src={Boton}/></Link>
  </div>
</div>
<div className="card" >
  <img src={Logo4} className="card-img-top" alt="Logo4"/>
  <div class="card-body">
  <h2>Cumpleaños</h2>
    <p className="card-text">Sabemos que es un día importante, puedes disfrutar de una cena especial y luego complementarla con unas copas en compañia de tus seres queridos.</p>
    <Link to ="/servicios"><img className="boton" src={Boton}/></Link>
  </div>
</div>
</div>
            <div className="container-2 even-style-imagen">
              <div className="container even-style-imagen2" id="eventos" >
                
                    <h1 className="titulo"> <strong>Organizamos tu evento</strong></h1>
                  </div>
                </div>
                

                <div className="row">
                  <div className="col-md-3">
                    <img className="img-evento" src={Logo}/>
                  </div>
                  <div className="col-md-3">
                    <img className="img-evento" src={Logo2}/>
                  </div>
                  <div className="col-md-3">
                    <img className="img-evento" src={Logo3}/>
                  </div>
                  <div className="col-md-3">
                    <img className="img-evento" src={Logo4}/>
                  </div>
                </div>  
                <div className="row">
                  <div className="col-md-3">
                    <h5 className="h5">Fiestas Tematicas</h5>
                    <p className="evento-text">
                      Contamos con las instalaciones para organizar tus eventos especiales, con la tematica e idea que desees.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <h5 className="h5">Matrimonios</h5>
                    <p className="evento-text">
                      Dejanos ser parte de este momento tan especial, organizando cada uno de los detalles para que sea el dia que soñaste siempre.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <h5 className="h5">Cenas empresariales</h5>
                    <p className="evento-text">
                      Aqui puedes organizar tus eventos empresariales, comerciales y personales que requieras, con la mejor carta e instalaciones de la ciudad.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <h5 className="h5">Cumpleaños</h5>
                    <p className="evento-text">
                      Sabemos que es un día importante, puedes disfrutar de una cena especial y luego complementarla con unas copas en compañia de tus seres queridos.
                    </p>
                  </div>
        
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <Link to ="/servicios"><img className="boton"src={Boton}/></Link>
                  </div>
                  <div className="col-md-3">
                    <Link to ="/servicios"><img className="boton" src={Boton}/></Link>
                  </div>
                  <div className="col-md-3">
                    <Link to ="/servicios"><img className="boton" src={Boton}/></Link>
                  </div>
                  <div className="col-md-3">
                    <Link to ="/servicios"><img className="boton" src={Boton}/></Link>
                  </div>
                </div> 
              </div>
          
            </> 
        );
      }

export default Eventos;