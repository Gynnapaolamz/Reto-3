import React,{Component, useState} from 'react'
import "./Encabezado.css";
import logo from "../../media/logo@2x.png";
import cart from "../../media/cart.png";
import "../../css/bootstrap.min.css";
import ReactModal from 'react-modal';
import emailjs from 'emailjs-com';
import { LoginButton } from "../login/Login";
import { LogoutButton } from "../login/Logout";
import {BrowserRouter as Router, 
    Route, 
    Switch, 
    Link, useHistory} from "react-router-dom";
import {useAuth} from '../context/AuthContext';

    const spanStyles = {
        height: '100px'
      };
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: '10px',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

const Profile = () => {
  const [error, setError] = useState('');
  const {currentUser, logout} = useAuth();
  const history = useHistory();

  async function handleLogout(){
    setError('');

    try { 
        await logout();
        history.push('/')
    } catch{
        setError('Fallo al cerrar sesión')
    }
} 

return handleLogout();
}

class Encabezado extends Component{
    
    constructor () {
        super();
        this.state = {
          showModal: false
        };    
        
        
/*      
        const [error, setError] = useState('');
        const {currentUser, logout} = useAuth();
        const history = useHistory();

*/
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

  /*  
        async function handleLogout(){
          setError('');
  
          try { 
              await logout();
              history.push('/')
          } catch{
              setError('Fallo al cerrar sesión')
          }
      } */
      }
     

      handleSubmit(e) {
        e.preventDefault();
        emailjs.sendForm('service_jemyoc1', 'template_wwx52mv', e.target, 'user_yAOlieKwjwT6J3Npcb3ck')
          .then((result) => {
              //console.log(result.text);
              alert("Enviado");
          }, (error) => {
              console.log(error.text);
            alert("Hubo un error");
          });
          //e.target.reset();
          this.setState({ showModal: false });
        
      }
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

    
render(props){
    return (
        <>
        
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg gridHeader">
                <div className="logoColum">
                    <Link to="/inicio"className="navbar-brand px-5"><img src={logo} width="100" height="80"/></Link>
                </div>
                <div className="container-fluid px-5">
                    <Link className="navbar-brand" to="/inicio">Inicio</Link>
                    <Link className="navbar-brand" to="/nosotros">Quienes Somos</Link>
                    <Link className="navbar-brand" to="/menu">Menú</Link>
                    <Link className="navbar-brand" to="/servicios">Servicios</Link>
                    <Link className="navbar-brand" to="/contacto">Contactanos</Link>
                    
                    <button className="navbar-brand disabled botonReserva" onClick={this.handleOpenModal} type="button">Reserva en linea </button> 
                    <Link className="navbar-brand disabled" to="/carrito" tabindex="-1" aria-disabled="true">
                        <img src={cart}  width="40" height="40"/>
                        </Link>
               {/*    <button className="navbar-brand disabled botonReserva"><Link to='/update-profile'>Perfil</Link></button>
                    <button onClick={handleLogout} className="navbar-brand disabled botonReserva">Salir</button> */}

                   

            </div>
        </nav>
        </div>
      
        <div>
          <ReactModal 
           isOpen={this.state.showModal}
           style={customStyles}>
          <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Reserva en linea</h5>
                  <button type="button" class="btn-close"  onClick={this.handleCloseModal}></button>
                </div>
                <form onSubmit={this.handleSubmit}>
                <div class="modal-body">
                  <div class="form-floating mb-3">
                    <select class="form-select" name = "servicio" id="floatingServicio" aria-label="Floating label select example">
                      <option selected="">Celebraciones de cumpleaños</option>
                      <option value="Aniversarios">Aniversarios</option>
                      <option value="Fiestas infantiles">Fiestas infantiles </option>
                      <option value="Declaraciones o apuestas">Declaraciones o apuestas</option>
                      <option value="Despedidas">Despedidas</option>
                      <option value="Cena de amigos">Cena de amigos</option>

                    </select>
                    <label for="floatingServicio">Servicio</label>
                  </div>
                  <div class="form-floating mb-3">
                      <input type="text" name ="name" class="form-control" id="floatingNombre" placeholder="Nombre completo" required/>
                      <label for="floatingNombre" class="form-label">Nombre completo</label>
                  </div>
                  <div class="form-floating mb-3">
                      <input type="email" name="mail" class="form-control" id="floatingEmail" placeholder="name@example.com" required/>
                      <label for="floatingEmail">Email</label>
                  </div>
                  <div class="form-floating mb-3">
                      <input type="tel" name ="telefono" id="floatingPhone" class="form-control"  placeholder="3108102962" pattern="[0-9]{10}" required/>
                      <label for="floatingPhone">Telefono</label>
                  </div>
                  <div class="form-floating mb-3">
                      <input type="number" name ="personas" id="floatingPersonas" class="form-control" min="1" placeholder="1" required/>
                      <label for="floatingPersonas">Numero de personas</label>
                  </div>
                  <div class="form-floating mb-3">
                      <input type="datetime-local" name ="fecha" id="floatingReserva" class="form-control" required/>
                      <label for="floatingReserva">Fecha/Hora</label>
                  </div>
                  <div class="form-floating mb-3">
                      <textarea class="form-control" name ="solicitud" placeholder="Escriba su solicitud" id="floatingSolicitud" style={spanStyles}></textarea>
                      <label for="floatingSolicitud">Solicitud adicional</label>
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onClick={this.handleCloseModal}>Cerrar</button>
                <button type="submit" class="btn btn-primary">Enviar reserva</button>
              </div>
          </form>
            </div>
          </div>

        </ReactModal>
          </div>
                </>
    )
}
}

export default Encabezado
