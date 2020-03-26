import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './redux-store/Reducers';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger ();


let store = createStore(rootReducer, 
  applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(<Provider store={store}>
	<Router>
	<App />
	</Router>
	</Provider>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
