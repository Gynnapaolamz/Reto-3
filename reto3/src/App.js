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
import Mapa from './componentes/Mapa/Mapa';
import Eventos from './componentes/eventos/Eventos';
import Recomendados from './componentes/recomendados/Recomendados';
import Carrousel from './componentes/Carrousel';


function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/nosotros"  component={QuienesSomos}/>
    <Route exact path="/servicios"  component={Servicios}/>
    <Route exact path="/contacto"  component={Contacto}/>
    <Route exact path="/menu" component={Menu}/>
    <Route exact path="/" component={Inicio}/>
    <Route exact path="/mapa" component={Mapa}/>
    <Route exact path="/"></Route>
    </Switch>
  </Router> 
  );
}

export default App;
