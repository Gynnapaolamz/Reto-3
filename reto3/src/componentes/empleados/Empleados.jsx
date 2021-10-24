import React, { Component } from 'react'
import "../../css/bootstrap.min.css";
import personal_1 from '../../media/personal1@2x.png';
import personal_2 from '../../media/personal2@2x.png';
import personal_3 from '../../media/personal3@2x.png';
import personal_4 from '../../media/personal4@2x.png';
import personal_5 from '../../media/personal5@2x.png';
import personal_6 from '../../media/personal6@2x.png';

const Empleados = (props) => {
    return (  
        <div>
            <main className="colorMain">
                <div className="container marketing tope">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={personal_1} className="bd-placeholder-img rounded-circle bordes" width="140" height="140"/>
                            <h2 className="nombres"><b>Juan Manuel Gómez B.</b></h2>
                            <p className="cargos"><b>Chef ejecutivo</b></p>
                        </div>
                        <div className="col-lg-4">
                            <img src={personal_2} className="bd-placeholder-img rounded-circle bordes" width="140" height="140"/>
                            <h2 className="nombres"><b>Ana Isabel Casallas B.</b></h2>
                            <p className="cargos"><b>Chef pastelera</b></p>
                        </div>
                        <div className="col-lg-4">
                            <img src={personal_3} className="bd-placeholder-img rounded-circle bordes" width="140" height="140"/>
                            <h2 className="nombres"><b>María Paulina Veloza G.</b></h2>
                            <p className="cargos"><b>Administradora</b></p>
                        </div>
                    </div>
                
                    <div className="container marketing">
                        <div class="row">
                            <div class="col-lg-4">
                                <img src={personal_4} className="bd-placeholder-img rounded-circle bordes" width="140" height="140"/>
                                <h2 className="nombres"><b>Camila Andrea Diaz Z.</b></h2>
                                <p className="cargos"><b>Recepcionista</b></p>
                            </div>
                            <div class="col-lg-4">
                                <img src={personal_5} className="bd-placeholder-img rounded-circle bordes" width="140" height="140"/>
                                <h2 className="nombres"><b>Fabián Andres Jaramillo P.</b></h2>
                                <p className="cargos"><b>Mesero</b></p>
                            </div>
                            <div class="col-lg-4">
                                <img src={personal_6} className="bd-placeholder-img rounded-circle bordes" width="140" height="140"/>
                                <h2 className="nombres"><b>José Manuel Manosalva J.</b></h2>
                                <p className="cargos"><b>Mesero</b></p>
                            </div>
                        </div>
                    </div>      
                </div>          
            </main>
        </div>
    );
}
 
export default Empleados;