import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import * as serviceWorker from './serviceWorker';
import All from './All';
// import Fade from 'react-reveal'


ReactDOM.render(
  <React.StrictMode>
  <All />
  </React.StrictMode>,
  document.getElementById('root')
);



serviceWorker.unregister();
