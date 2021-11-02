import './App.css';
import {BrowserRouter as Router, 
        Route, 
        Switch, 
        Link} from "react-router-dom";
import QuienesSomos from './componentes/quienesSomos/QuienesSomos';
import Servicios from './componentes/Servicios/Servicio';
import Contacto from './componentes/Contactanos/Contactanos';
import Menu from './componentes/Menu/ContainerMenu';
import Inicio from './componentes/inicio/Inicio';
import Carrito from './componentes/Carrito/CarritoCountainer';
import Mapa from './componentes/Mapa/Mapa';
import Eventos from './componentes/eventos/Eventos';
import Recomendados from './componentes/recomendados/Recomendados';
import Carrousel from './componentes/Carrousel';
import Comentarios from './componentes/comentarios/Comentarios';


import MainContainer from './componentes/pages/MainContainer';


function App() {
  return (
    
    <MainContainer />
  );
}

export default App;
