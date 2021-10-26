import React,{Component,Fragment} from 'react'
import Imagen1 from "../../media/foto1.1@2x.png";
import Imagen2 from "../../media/menu1@2x.png";
import Imagen3 from "../../media/menu2@2x.png";
import Imagen4 from "../../media/menu3@2x.png";
import Imagen5 from "../../media/menu4@2x.png";
import Carrousel from "../../componentes/Carrousel";
import Encabezado from '../../componentes/encabezado/Encabezado';
import Footer from '../../componentes/footer/Footer';
import Testimonials from '../../componentes/carrusel/Testimonials';
import Recomendados from '../../componentes/recomendados/Recomendados';
import Eventos from '../../componentes/eventos/Eventos';

import "../../css/bootstrap.min.css";
import "../../css/Inicio.css";


const Inicio = () => {   

        return (
          <Fragment>
          <Encabezado/>
       
          <div id="carouselExampleFade" className="carousel slide carousel-fade justify-content-center " data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Carrousel image={Imagen1}/>
              </div>
              <div className="carousel-item">
                <Carrousel image={Imagen2}/>
              </div>
              <div className="carousel-item">
                <Carrousel image={Imagen3}/>
              </div>
              <div className="carousel-item">
                <Carrousel image={Imagen4}/>
              </div>
              <div className="carousel-item">
                <Carrousel image={Imagen5}/>
              </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            
        <Recomendados/>
         
          <Eventos/> 
            
            <Testimonials/> 
            
            <Footer/>
          </Fragment>          
              )
    }
    
export default Inicio;