import React,{Component,} from 'react'
import Carrousel from "../../componentes/Carrousel"
import Menu from "../../media/menu1@2x.png";
import Menu2 from "../../media/menu2@2x.png";
import Menu3 from "../../media/menu3@2x.png";
import Menu4 from "../../media/menu4@2x.png";
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
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-5">
                        <Carrousel image={Menu}/>
                      </div>
                      <div className="col-md-5">
                        <Carrousel image={Menu2}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <Carrousel image={Menu3}/>
                      </div>
                      <div className="col-md-5">
                        <Carrousel image={Menu4}/> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <Carrousel image={Menup}/>
                    </div>
                    <div className="row">
                      <button onclick="window.location.href='./menu.html'" className="btn btn-primary">Consulta el menú</button>
                    </div>
                  </div>        
                </div>
              </div>       
            </>       
)
}

export default Recomendados;