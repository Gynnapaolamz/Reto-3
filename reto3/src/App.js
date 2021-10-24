import './App.css';
import {BrowserRouter, Router, Switch} from "react-router-dom";
import QuienesSomos from './componentes/quienesSomos/QuienesSomos';
import Servicios from './componentes/Servicios/Servicio';
import Contacto from './componentes/Contactanos/Contactanos';
import Menu from './componentes/Menu/ContainerMenu';


function App() {
  return (
      <BrowserRouter>
        <Switch>
        <Router exact path="/nosotros"  component={Servicios}/>
        </Switch>
      </BrowserRouter> 
  );
}

export default App;
