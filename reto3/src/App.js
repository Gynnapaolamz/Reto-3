import React from 'react';
import './App.css';

import QuienesSomos from './componentes/quienesSomos/QuienesSomos';
import Servicios from './componentes/Servicios/Servicio';
import Contacto from './componentes/Contactanos/Contactanos';
import Menu from './componentes/Menu/ContainerMenu';

import "./css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Servicios></Servicios>
    </div>
  );
}

export default App;
