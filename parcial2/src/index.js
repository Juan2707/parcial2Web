import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Bandas from './components/bandas';


const root = ReactDOM.createRoot(document.getElementById('root'));

const component = <h1>Hola mundo</h1>;

 root.render(

  <App2 />

);



// serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
