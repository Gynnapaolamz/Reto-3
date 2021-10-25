import React,{Component,Fragment} from 'react'
import Encabezado from '../../componentes/encabezado/Encabezado';
import Footer from '../../componentes/footer/Footer';
import "../../css/bootstrap.min.css";


class Mapa extends Component {
    
    render(){

        return (
            <Fragment>
          <Encabezado/>
            <> 
            <div className="container">
        <h1>Mapa del sitio</h1>
      
        <ul className="nav nav-pills">
          <li role="presentation"><a href="./index.html">Inicio</a></li>
          <li role="presentation"><a href="./nosotros.html">Quienes somos</a></li>
          <li role="presentation"><a href="./menu.html">Menu</a></li>
          <li role="presentation"><a href="./servicios.html">Servicios</a></li>
          <li role="presentation"><a href="./contactanos.html">Contactanos</a></li>
        </ul>
      
        <section id="sec1">
      
          <h2>Inicio</h2>
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li><a href="./index.html#nuestra_propuesta">Nuestra propuesta</a></li>
                <li><a href="./index.html#recomendados">Recomendados por el chef</a></li>
                <li><a href="./index.html#eventos">Organiza tu evento</a></li>
                <li><a href="./index.html#testimonios">Testimonios</a></li>
                <li><a href="./index.html#contact">Contactanos</a></li>
              </ul>
            </div>
        
          </div>
        </section>
        <section id="sec2">
      
          <h2>Quienes somos</h2>
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li><a href="./nosotros.html#historia">Historia</a></li>
                <li><a href="./nosotros.html#personal">Nuestro personal</a></li>
                <li><a href="./nosotros.html#testimonios">Testimonios</a></li>
                <li><a href="./nosotros.html#contact">Contactanos</a></li>
              </ul>
            </div>
          </div>
        </section>
        <section id="sec3">
      
          <h2>Menu</h2>
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li><a href="./menu.html#menu">Menu</a></li>
                <li><a href="./menu1.html#menu">Menu 1</a></li>
                <li><a href="./menu2.html#menu">Menu 2</a></li>
                <li><a href="./menu.html#contact">Contactanos</a></li>
              </ul>
            </div>
          
          </div>
        </section>

        <section id="sec4">
          <h2>Servicios</h2>
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li><a href="./servicios.html#servicios">Servicios</a></li>
                <li><a href="./servicios.html#contact">Contactanos</a></li>
              </ul>
            </div>
      
          </div>
        </section>

        <section id="sec5">
          <h2>Contactanos</h2>
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li><a href="./contactanos.html#form">Formulario</a></li>
                <li><a href="./contactanos.html#contact">Contactanos</a></li>
              </ul>
            </div>
      
          </div>
        </section>
            
      </div>
         </>
    <Footer/> 
   </Fragment>  
);
}

}

export default Mapa;