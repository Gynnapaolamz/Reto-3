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
       
          <Carrousel/> 
                     
        <Recomendados/>
         
          <Eventos/> 
            
            <Testimonials/> 
            
            <Footer/>
          </Fragment>          
              )
    }
    
export default Inicio;