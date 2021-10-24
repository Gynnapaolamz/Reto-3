import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Encabezado from './componentes/encabezado/Encabezado';
import Testimonials from './componentes/carrusel/Testimonials';
import Footer from './componentes/footer/Footer';
import Historia from './componentes/historia/Historia';
import QuienesSomos from './componentes/quienesSomos/QuienesSomos';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <QuienesSomos>
          
      </QuienesSomos>
    </div>
  );
}

export default App;
