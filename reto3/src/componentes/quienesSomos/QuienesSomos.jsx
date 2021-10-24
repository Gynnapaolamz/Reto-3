import React, { Fragment } from 'react'
import "./quienesSomos.css";
import Encabezado from '../../componentes/encabezado/Encabezado';
import Testimonials from '../../componentes/carrusel/Testimonials';
import Footer from '../../componentes/footer/Footer';
import Historia from '../../componentes/historia/Historia';
import Empleados from '../../componentes/empleados/Empleados';
import personal_1 from '../../media/personal1@2x.png';
import personal_2 from '../../media/personal2@2x.png';
import personal_3 from '../../media/personal3@2x.png';
import personal_4 from '../../media/personal4@2x.png';
import personal_5 from '../../media/personal5@2x.png';
import personal_6 from '../../media/personal6@2x.png';



const QuienesSomos = () => {   
    var personal;
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

export default QuienesSomos