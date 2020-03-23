import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {Reducers} from './Reducers';
const loggerMiddleware = createLogger ();

 const store = createStore(Reducers,applyMiddleware(thunkMiddleware,loggerMiddleware));

 export default store;