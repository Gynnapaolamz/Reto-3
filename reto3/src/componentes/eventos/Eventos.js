import React,{Component,} from 'react'
import Menus from "../../componentes/Carrousel"
import Logo from "../../media/icono1@2x.png";
import Logo2 from "../../media/icono2@2x.png";
import Logo3 from "../../media/icono3@2x.png";
import Logo4 from "../../media/icono4@2x.png";
import Boton from "../../media/boton.png";
import "../../css/bootstrap.min.css";


class Eventos extends Component {
    
    render(){

        return (
            <>
            <div className="container-2" style ="background-image: url('./images/foto3@2x.png'); max-width: auto; height:auto">
  
  <div className="container" style="padding-block-start: 20px; padding-block-end: 20px;" id="eventos">
    
    <div className="row">
      <div className="col-md-6">
        <h1><strong>Organizamos tu evento</strong></h1>
      </div>
    </div>
      <div className="row">
        <div className="col-md-3">
          <Menus image={Logo}/>
        </div>
        <div className="col-md-3">
        <Menus image={Logo2}/>
        </div>
        <div className="col-md-3">
        <Menus image={Logo3}/>
        </div>
        <div className="col-md-3">
        <Menus image={Logo4}/>
        </div>
      </div>  
      <div className="row">
        <div className="col-md-3">
          <h5>Fiestas Tematicas</h5>
        <p>
          Contamos con las instalaciones para organizar tus eventos especiales, con la tematica e idea que desees.
        </p>
        </div>
        <div className="col-md-3">
          <h5>Matrimonios</h5>
          <p>
            Dejanos ser parte de este momento tan especial, organizando cada uno de los detalles para que sea el dia que soñaste siempre.
          </p>
        </div>
        <div className="col-md-3">
          <h5>Cenas empresariales</h5>
          <p>
            Aqui puedes organizar tus eventos empresariales, comerciales y personales que requieras, con la mejor carta e instalaciones de la ciudad.
          </p>
        </div>
        <div className="col-md-3">
          <h5>Cumpleaños</h5>
          <p>
            Sabemos que es un día importante, puedes disfrutar de una cena especial y luego complementarla con unas copas en compañia de tus seres queridos.
          </p>
        </div>
        
      </div>
      <div className="row">
        <div className="col-md-3">
          <a href ="./servicios.html"><Menus image={Boton}/></a>
        </div>
        <div className="col-md-3">
          <a href ="./servicios.html"><Menus image={Boton}/></a>
        </div>
        <div className="col-md-3">
          <a href ="./servicios.html"><Menus image={Boton}/></a>
        </div>
        <div className="col-md-3">
          <a href ="./servicios.html"><Menus image={Boton}/></a>
        </div>

      </div>
  </div>

 </div> 
       
            </>
        
);
}

}

export default Eventos;