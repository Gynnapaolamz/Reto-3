import React,{Component,} from 'react'
import Menu from "../../media/img3.png";
import Menu2 from "../../media/img4.png";
import Menu3 from "../../media/img5.png";
import Menu4 from "../../media/img6.png";
import Menup from "../../media/menu@2x.png";
import "../../css/bootstrap.min.css";
import "./Recomendados.css";

const Recomendados = () =>{
        return (
            <>
              <div className="container-r" id ="recomendados">
              <div class="container-g">
  <div class="row">
    <div class="col-sm-9">
      Recomendados del chef 
      <div class="container-section">
        <div class="col-8 ">
          <div class="container-fluid">
  <div class="row">
    <div class="col">
      <img className="img" src={Menu}/>
      </div>
    <div class="col"> 
    <img className="img" src={Menu2}/>
    </div>
    <div class="w-100"></div>
    <div class="col">
      <img className="img" src={Menu3}/>
      </div>
    
    <div class="col">
      <img className="img" src={Menu4}/>
      </div>  
  </div>
</div>
</div>
 </div>
        <div class="col-4 ">
          <img className="imgm" src={Menup}/>
          <button type="button" class="btn btn-danger">Danger</button>
        </div>
      </div>
    </div>
  </div>
</div>      
            </>       
)
}

export default Recomendados;