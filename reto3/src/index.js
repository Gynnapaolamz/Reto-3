import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
{/*
import {Auth0Provider} from '@auth0/auth0-react';
import {FirebaseAppProvider} from 'reactfire';
import ConfigFirebase from './configFirebaseSS'; */}

ReactDOM.render(
  <React.StrictMode>
   {/* <Auth0Provider
      domain="dev-tj7tfz5x.us.auth0.com"
      clientId="aFhbS0mZ2g9lHe3HWUjUkmto2DaS3pLC"
      redirectUri={window.location.origin}
    >
    <App />
   </Auth0Provider> */}
  {/*  <FirebaseAppProvider firebaseConfig={ConfigFirebase}>
      <Suspense fallback={'Cargando página web'}>
      <App />
      </Suspense>
  </FirebaseAppProvider> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

