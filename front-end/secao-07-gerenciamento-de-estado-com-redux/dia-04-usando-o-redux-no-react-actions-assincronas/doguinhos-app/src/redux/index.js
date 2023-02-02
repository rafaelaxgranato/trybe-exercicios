import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import dogReducer from './reducers/dogReducer'

// Cria a store.
const store = createStore(dogReducer, composeWithDevTools());

export default store;
