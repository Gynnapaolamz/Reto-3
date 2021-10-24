import React from 'react'
import "../../css/bootstrap.min.css";
import "../../css/carousel.css";
import testimonio_1 from "../../media/testimonio1@2x.png";
import testimonio_2 from "../../media/testimonio2@2x.png";
import testimonio_3 from "../../media/testimonio3@2x.png";


const Testimonials = () => {
    return (
        <div>
                <div id="conteItemsCarrusel">
                    <div className="itemCarrusel" id="itemCarrusel-1">
                        <div className="tarjetaCarrusel" id="tarjetaCarrusel-1">
                            <div className="testimonio-1">
                                <img src={testimonio_1} 
                                className="bd-placeholder-img rounded-circle bordes" width="140" height="140"/>
                            </div>
                            <div className="palabrasTestimonio">
                                <p><i>"Excelente diseño de la carta, magnífica materia prima y ejecución. Atención eficiente y cordial, 
                                    del tipo que hace que te sientas bien recibido y que el equipo está comprometido con hacer pasar a sus 
                                    comensales un momento feliz. Una institución."</i></p>
                                <p className="nombreOpinion"><b>Carlos Martinez</b></p>
                            </div>
                        </div>
                <div className="flechasCarrusel">
                    <a href="#itemCarrusel-3" ><i className="fas fa-chevron-left"></i></a>
                    <a href="#itemCarrusel-2" ><i className="fas fa-chevron-right"></i></a>
                </div>
            </div>
            <div className="itemCarrusel" id="itemCarrusel-2">
                <div className="tarjetaCarrusel" id="tarjetaCarrusel-2">
                    <div className="testimonio-3">
                        <img src={testimonio_2}  class="bd-placeholder-img rounded-circle bordes" width="140" height="140"/>
                    </div>
                    <div className="palabrasTestimonio-2">
                        <p><i>"Un local precioso, decorado con mucho gusto. Se nota que los dueños han puesto mucho esfuerzo e ilusión en el local. La carta es un poco corta, pero no es un detalle importante en mi opinión ya que los platos que probamos eran de una calidad excelente. Un precio muy ajustado a lo que ofrecen, al contrario que muchos otros locales donde parece que servir un plato medianamente elaborado merece pagar precios desproporcionados. altamente recomendable."</i></p>
                        <p className="nombreOpinion"><b>Daniela Manjarrez</b></p>
                
                    </div>
                </div>
                <div className="flechasCarrusel">
                    <a href="#itemCarrusel-1" ><i class="fas fa-chevron-left"></i></a>
                    <a href="#itemCarrusel-3" ><i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
            <div className="itemCarrusel" id="itemCarrusel-3">
                <div className="tarjetaCarrusel" id="tarjetaCarrusel-3">
                    <div className="testimonio-3">
                        <img src={testimonio_3}  class="bd-placeholder-img rounded-circle bordes" width="140" height="140"/>
                    </div>
                    <div className="palabrasTestimonio-3">
                        <p><i>"Lugar pequeño y acogedor. El patio le da ese toque tan especial. La comida elaborada y con muy buena relación calidad-precio. Por poner una pega, el servicio un poco lento, pero quizás fueron las circunstancias del día."</i></p>
                        <p className="nombreOpinion"><b>Indira Cabana</b></p>
                    </div>
                </div>
                <div className="flechasCarrusel">
                    <a href="#itemCarrusel-2" ><i class="fas fa-chevron-left"></i></a>
                    <a href="#itemCarrusel-1" ><i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Testimonials



