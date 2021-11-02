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
          history.push('/');
      } catch{
          setError('Fallo al cerrar sesión');
      }
    }

    return (
        <>
        <button className="navbar-brand disabled botonReserva"><Link to='/update-profile' className="botonPerfil">Perfil</Link></button>
        <button onClick={handleLogout} className="navbar-brand disabled botonReserva">Salir</button> 
        </>
    )
  }

  export default Botones;