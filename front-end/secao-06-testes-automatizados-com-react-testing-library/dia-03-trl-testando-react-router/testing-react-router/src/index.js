import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* O BrowserRouter deve encapsular todos os itens chamados pelo react-router-dom, e, nesso caso, existem dois <Link> no App.js, o que nos leva a colocar a tag <BrowserRouter> no arquivo index.js. Aleḿ disso, é necessário colocá-lo neste arquivo para ter controle sobre o BrowserRouter no testes, o que não aconteceria se ele estivesse dentro do componente a ser testado. */
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
