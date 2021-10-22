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
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Encabezado/>
      <Testimonials/>
    </div>
  );
}

export default App;
