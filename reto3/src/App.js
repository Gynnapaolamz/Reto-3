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
import InicioSesion from './componentes/login/InicioSesion';
import LoginFirebase from './componentes/login/LoginFirebase';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/nosotros"  component={QuienesSomos}/>
    <Route exact path="/servicios"  component={Servicios}/>
    <Route exact path="/contacto"  component={Contacto}/>
    <Route exact path="/carrito"  component={Carrito}/>
    <Route exact path="/menu" component={Menu}/>
    <Route exact path="/" component={Inicio}/>
    <Route exact path="/mapaSitio" component={Mapa}/>
  {/*  <Route exact path="/login" component={InicioSesion}/> */}
    <Route exact path="/"></Route>
    </Switch>
  </Router> 
  );
}

export default App;
