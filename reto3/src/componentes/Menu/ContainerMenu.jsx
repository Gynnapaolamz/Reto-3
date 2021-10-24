import React,{Component,Fragment} from 'react'
import Plato from "../Plato";
import cumple from "../../media/Cumple.jpeg";
import Encabezado from '../../componentes/encabezado/Encabezado';
import Footer from '../../componentes/footer/Footer';
import "../../css/bootstrap.min.css";


class ContainerMenu extends Component {
    
    render(){

        return (
            <Fragment>
            <Encabezado/>
            <br></br>
            <>  <div className="container">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            <div className="col d-flex justify-content-center mb-4">
            <Plato imagen={cumple} platoName = "Prueba" platoDescripcion = "Pruebaasss"  precio = "30000"/>
            </div>
            <div className="col d-flex justify-content-center mb-4">
            <Plato imagen={cumple} platoName = "Prueba" platoDescripcion = "Pruebaasss"  precio = "30000"/>
            </div>
            <div className="col d-flex justify-content-center mb-4">
            <Plato imagen={cumple} platoName = "Prueba" platoDescripcion = "Pruebaasss"  precio = "30000"/>
            </div>
            <div className="col d-flex justify-content-center mb-4">
            <Plato imagen={cumple} platoName = "Prueba" platoDescripcion = "Pruebaasss"  precio = "30000"/>
            </div>
            </div>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            <div className="col d-flex justify-content-center mb-4">
            <Plato imagen={cumple} platoName = "Prueba" platoDescripcion = "Pruebaasss"  precio = "30000"/>
            </div>
            <div className="col d-flex justify-content-center mb-4">
            <Plato imagen={cumple} platoName = "Prueba" platoDescripcion = "Pruebaasss"  precio = "30000"/>
            </div>
            <div className="col d-flex justify-content-center mb-4">
            <Plato imagen={cumple} platoName = "Prueba" platoDescripcion = "Pruebaasss"  precio = "30000"/>
            </div>
            <div className="col d-flex justify-content-center mb-4">
            <Plato imagen={cumple} platoName = "Prueba" platoDescripcion = "Pruebaasss"  precio = "30000"/>
            </div>
            </div>
            </div>
                    </>
            
            <Footer/>
            </Fragment>
);
}

}

export default ContainerMenu;