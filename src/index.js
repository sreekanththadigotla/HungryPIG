import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import homeReducer from './reducers/HomeReducer/homeReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer/authReducer';
import { childReducer } from './reducers/childReducer/childReducerr';
 
 


const allStore = combineReducers  
                     ({ 
                       home: homeReducer,
                       auth: authReducer,
                       child: childReducer
                     })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(allStore,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render( 
                   <Provider store={store}><App/></Provider>
                   , document.getElementById('root'));
registerServiceWorker();


