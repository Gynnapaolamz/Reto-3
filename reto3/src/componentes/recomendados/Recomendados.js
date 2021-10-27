import React,{Component,} from 'react'
import Menu from "../../media/img3.png";
import Menu2 from "../../media/img4.png";
import Menu3 from "../../media/img5.png";
import Menu4 from "../../media/img6.png";
import Menup from "../../media/menu@2x.png";
import "../../css/Inicio.css"
import "../../css/bootstrap.min.css";
import "./Recomendados.css";

const Recomendados = () =>{
        return (
            <>
              <div className="container" id ="recomendados">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="styless"/*style="font-size:50px;"*/ >
                      Recomendados del chef
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-3">
                        <img className="img" src={Menu}/>
                      </div>
                      <div className="col-md-3">
                        <img className="img" src={Menu2}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <img className="img" src={Menu3}/>
                      </div>
                      <div className="col-md-3">
                        <img className="img" src={Menu4}/> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <img className="imgm" src={Menup}/>
                    </div>
                    <div className="row">
                      <button onclick="window.location.href='../componentes/Menu/ContainerMenu.js'" className="btn btn-primary">Consulta el menú</button>
                    </div>
                  </div>        
                </div>
              </div>       
            </>       
)
}

export default Recomendados;