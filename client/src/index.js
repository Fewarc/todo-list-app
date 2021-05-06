import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import App from './App.js';
import spikes from './images/spikes.png'

/**
 * store is needed to hold global variables for redux to use
 * 
 * thunk is needed to perform asychronous actions
 * 
 * provider is needed for the app to use store
 */

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);