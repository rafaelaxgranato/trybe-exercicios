// Ops! A aplicação está quebrada!!
// Implemente a Store nesse arquivo e o Provider no arquivo ./src/index.js
// para a aplicação voltar a funcionar!


import { legacy_createStore as createStore } from 'redux';
import cosmoReducer from './reducers/cosmoReducer';

// Cria uma store com a função createStore, que recebe como parâmetro o reducer cosmoReducer já implementado.
const store = createStore(cosmoReducer);

export default store;
