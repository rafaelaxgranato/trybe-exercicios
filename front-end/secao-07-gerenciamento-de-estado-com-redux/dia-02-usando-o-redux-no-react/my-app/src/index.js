import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* Passa as informações da store para a aplicação, permitindo que os componentes acessem o estado global.
  O Provider encapsula o componente App, passando a store como prop. */
  <Provider store={ store }>
    <App />
  </Provider>,
);