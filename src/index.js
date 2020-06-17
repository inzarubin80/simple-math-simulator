import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Bootstrap.css';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer';
import  thunk from 'redux-thunk';



//const store = createStore(rootReducer, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//));

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));


const app = (<Provider store={store}>
    <App />
</Provider>);


ReactDOM.render(app, document.getElementById('root'));
