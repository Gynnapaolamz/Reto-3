import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseAppProvider} from 'reactfire';
 

ReactDOM.render(
  <React.StrictMode>
   
 
      <App />
     
 
  </React.StrictMode>,
  document.getElementById('root')
);

