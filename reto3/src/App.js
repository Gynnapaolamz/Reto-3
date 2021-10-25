import './App.css';
import {BrowserRouter as Router, 
        Route, 
        Switch, 
        Link} from "react-router-dom";
import QuienesSomos from './componentes/quienesSomos/QuienesSomos';
import Servicios from './componentes/Servicios/Servicio';
import Contacto from './componentes/Contactanos/Contactanos';
import Menu from './componentes/Menu/ContainerMenu';
import Inicio from './componentes/Inicio/Inicio';
import Mapa from './componentes/Mapa/Mapa';


function App() {
  return (
      <Router>
        <Switch>
        <Route exact path="/nosotros"  component={QuienesSomos}/>
        <Route exact path="/servicios"  component={Servicios}/>
        <Route exact path="/contacto"  component={Contacto}/>
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/inicio" component={Inicio}/>
        <Route exact path="/mapa" component={Mapa}/>
        <Route exact path="/"></Route>
        </Switch>
      </Router> 
  );
}

export default App;
