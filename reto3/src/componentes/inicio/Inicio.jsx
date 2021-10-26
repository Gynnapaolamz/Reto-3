import React,{Component,Fragment} from 'react'
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