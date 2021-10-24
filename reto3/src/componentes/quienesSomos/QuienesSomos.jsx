import React, { Fragment } from 'react'
import Encabezado from '../../componentes/encabezado/Encabezado'
import Testimonials from '../../componentes/carrusel/Testimonials';
import Footer from '../../componentes/footer/Footer';
import Historia from '../../componentes/historia/Historia';



const QuienesSomos = () => {   

        return (
            <Fragment>
                <Encabezado/>
                <br></br>
                <Historia/>
                <Testimonials/>
                <Footer/>
            </Fragment>
        )
    
}

export default QuienesSomos