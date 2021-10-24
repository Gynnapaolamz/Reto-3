import React,{Component} from 'react'
import "../css/bootstrap.min.css";
const spanStyles = {

    textAling: 'center'

  };
class Contacto extends Component{
    
render(){

    return (
        <>
        <div className="container-fluid" id="form">
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <h1 className="display-1"><strong>Contactanos</strong></h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum libero in ipsum dignissim sagittis. Curabitur vulputate nibh a ipsum porta lobortis. Phasellus hendrerit sem sit amet felis pretium luctus. Etiam placerat sem vel vestibulum semper. Suspendisse sed nisl consequat, commodo felis non, porttitor diam. Praesent justo leo, vehicula sed tellus eu, imperdiet dignissim magna. Proin ac fringilla orci. Morbi et urna quam. Nulla bibendum sagittis nunc. Morbi bibendum iaculis sodales.    
            
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum libero in ipsum dignissim sagittis. Curabitur vulputate nibh a ipsum porta lobortis. Phasellus hendrerit sem sit amet felis pretium luctus. Etiam placerat sem vel vestibulum semper. Suspendisse sed nisl consequat, commodo felis non, porttitor diam. Praesent justo leo, vehicula sed tellus eu, imperdiet dignissim magna. Proin ac fringilla orci. Morbi et urna quam. Nulla bibendum sagittis nunc. Morbi bibendum iaculis sodales.
            Suspendisse blandit ullamcorper pretium. Pellentesque finibus dui ut dui condimentum auctor. In ut iaculis ligula. Nunc sollicitudin enim at diam sodales dapibus. Nam fringilla odio sit amet mi porta, blandit porta elit suscipit. 
        </div>
          <div className="col-md-6">
            <form id="formPri">
                <div className="mb-3">
                    <select required name="evento" className="form-select" placeholder = "Hola">
                        <option>Seleccione el servicio</option>
                        <option> Celebracion de cumpleaños </option>
                        <option>  Aniversarios </option>
                        <option>   Fiestas infantiles </option>
                        <option>   Declaraciones o apuestas </option>
                        <option>  Despedidas </option>
                        <option>  Cena de amigos</option>
                    </select>
                    <label></label>
                    <input required className="form-control" type="text" placeholder="Asunto" name="asunto"/>
                    <label></label>
                    <input required className="form-control" type="text" placeholder="Nombre Completo" name="name"/>
                    <label></label>
                    <input required type="email" name ="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo Electronico"/>
                    <label></label>
                    <textarea required className="form-control" name="message" rows="5"></textarea>
                    <label></label>
                    <div className="mb-3 form-check">
                        <input required type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label  className="form-check-label" for="exampleCheck1">Acepto terminos y condiciones</label>
                    </div>
                    <div style={spanStyles}>
                    <  button type="button" className="btn btn-primary">Enviar</button>
                    </div>
                </div>

            </form>
            </div>
           
        </div>
</div>
          </>
          )
    
}

}

export default Contacto;