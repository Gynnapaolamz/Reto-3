import React from 'react';
import {BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom';
import {AuthProvider} from '../context/AuthContext';
import PrivateRoutes from '../../routes/PrivateRoutes';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import UpdateProfile from './UpdateProfile';
import Dashboard from './Dashboard';

import QuienesSomos from '../quienesSomos/QuienesSomos';
import Servicios from '../Servicios/Servicio';
import Contacto from '../Contactanos/Contactanos';
import Menu from '../Menu/ContainerMenu';
import Inicio from '../inicio/Inicio';
import Carrito from '../Carrito/CarritoCountainer';
import Mapa from '../Mapa/Mapa';


const MainContainer = () =>{
    return (
        <div>
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoutes exact path="/inicio" component={Inicio}/>
                    
                    <PrivateRoutes exact path="/update-profile" component={UpdateProfile} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <PrivateRoutes exact path="/nosotros"  component={QuienesSomos}/>
                    <PrivateRoutes exact path="/servicios"  component={Servicios}/>
                    <PrivateRoutes exact path="/contacto"  component={Contacto}/>
                    <PrivateRoutes exact path="/carrito"  component={Carrito}/>
                    <PrivateRoutes exact path="/menu" component={Menu}/>
                    
                    <PrivateRoutes exact path="/mapaSitio" component={Mapa}/>
                </Switch>
            </AuthProvider>
        </Router>
        </div>
    )
}

export default MainContainer;