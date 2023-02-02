import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /* Agora que criamos a store, precisamos passar a sua informação para o restante da aplicação.
    Para isso, é preciso importar o Provider da biblioteca react-redux e passar como prop a store criada.
    Devemos também fazer com que o Provider encapsule o componente App, de modo que App seja filho do Provider.
    Dessa forma, poderemos utilizar o estado global da aplicação em todos os nossos componentesz */
  <Provider store={ store }>
    <App />
  </Provider>,
);
