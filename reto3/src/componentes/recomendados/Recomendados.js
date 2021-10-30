import React,{Component,} from 'react'
import Menu from "../../media/img3.png";
import Menu2 from "../../media/img4.png";
import Menu3 from "../../media/img5.png";
import Menu4 from "../../media/img6.png";
import Menup from "../../media/menu@2x.png";
import Logomenu from "../../media/Logomenu.png"
import "../../css/bootstrap.min.css";
import "./Recomendados.css";
import {BrowserRouter as Router, 
    Route, 
    Switch, 
    Link} from "react-router-dom";

const Recomendados = () =>{
        return (
            <>
            <div className="container-reco">
         <div className="titulorec even-style-imagen2" id="eventos" >
          <h1>Recomendados del chef</h1>
          </div>
           <div className="container-card1">
    <div className="card1" >
     <div className="imgrec">
       <img src={Menu} className="card-img-top" alt="Menu" width="225" height="225"/> 
       <img src={Menu2} className="card-img-top" alt="Menu2" width="225" height="225"/>
       </div>
</div>
<div className="card2" >
  <div className="imgrec">
  <img src={Menu3} className="card-img-top" alt="Menu3" width="225" height="225"/>
  <img src={Menu4} className="card-img-top" alt="Menu4" width="225" height="225"/>
  </div>
</div>
<div className="cardm" >
  <div className="imgmenu">
  <img src={Menup} className="card-img-top" alt="Menup" width="100" height="400"/> 
  <Link to ="/menu"><img className="boton" src={Logomenu} width="70" height="70"/></Link>
  </div>   
</div>
  </div>
  </div>           
</>       
);
}

export default Recomendados;