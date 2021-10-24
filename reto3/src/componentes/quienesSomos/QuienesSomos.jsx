import React, { Fragment } from 'react'
import "./quienesSomos.css";
import Encabezado from '../../componentes/encabezado/Encabezado';
import Testimonials from '../../componentes/carrusel/Testimonials';
import Footer from '../../componentes/footer/Footer';
import Historia from '../../componentes/historia/Historia';
import Empleados from '../../componentes/empleados/Empleados';

const QuienesSomos = () => {   
    
        return (
            <Fragment>
                <Encabezado/>
                <br></br>
                <Historia/>
                <br></br>
                <Empleados/>
                <Testimonials/>
                <Footer/>
            </Fragment>
        )
    
}

export default QuienesSomos;