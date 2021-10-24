import React from "react";
import Servicio from "./Servicio";
import cumple from "../media/Cumple.jpeg";

class ContainerServicios extends React.Component {

    render(){

        return (
            <>
            <React.Fragment>
                <Servicio imagen={cumple} servicio ="Celebraciones de cumpleaños">
                </Servicio>
                </React.Fragment>
            </>

        );
    }

}

export default ContainerServicios;