import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

/* O método combineReducers, como o próprio nome diz, é uma função que faz a junção de todos os reducers.
Ela deve receber como parâmetro um objeto com todos os reducers que serão utilizados.
Podemos utilizar o combineReducers mesmo quando possuímos apenas um reducer. */
const rootReducer = combineReducers({ counterReducer });

export default rootReducer;
