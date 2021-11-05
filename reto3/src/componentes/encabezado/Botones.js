import React,{useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import "./Encabezado.css";
import {useAuth} from '../context/AuthContext';

const Botones = () => {
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();
    const history = useHistory();

    async function handleLogout(){
      setError('');
      try { 
          await logout();
          history.push('/login');
      } catch{
          setError('Fallo al cerrar sesión');
      }
    }

    return (
        <>
        <button className="navbar-brand disabled botonReserva"><Link to='/update-profile' className="botonPerfil">
        <img
                      src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/user-circle-solid.svg?alt=media&token=8e028bbb-3809-4118-b509-0d58c2885562"
                      width="40" height="40"
                      />    
        </Link></button>
        <button onClick={handleLogout} className="navbar-brand disabled botonReserva">
        <img
                      src="https://firebasestorage.googleapis.com/v0/b/juvetic-reto3.appspot.com/o/sign-out-alt-solid.svg?alt=media&token=d70e0c5e-489d-4afc-8047-67480ca650c3"
                      width="40" height="40"
                      />       
            
        </button> 
        </>
    )
  }

  export default Botones;