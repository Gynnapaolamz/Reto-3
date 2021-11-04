import React,{Component,Fragment} from 'react'
import Plato from "../Plato";
import Encabezado from '../../componentes/encabezado/Encabezado';
import Footer from '../../componentes/footer/Footer';
import "../../css/bootstrap.min.css";
import { platos } from "../../services/platos";


const ListPlatos = () => {
    return (
      <>
        {platos.map((data, id) => {
          return (
            <div className="col d-flex justify-content-center mb-4">
                <div id={id} key={id}>
                <Plato
                    imagen = {data.imagen}
                     platoName={data.platoName}
                     precio={data.precio}
                     />
                </div>
            </div>
          );
        })}
      </>
    );
  };


class ContainerMenu extends Component {
    
    render(){

        return (
            <Fragment>
            <Encabezado/>
            <br></br>
            <>  <div className="container">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            <ListPlatos />
            </div>
            </div>
                    </>
            
            <Footer/>
            </Fragment>
);
}

}

export default ContainerMenu;