import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import reducers from './reducers';
import {Provider} from 'react-redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <App />
  </Provider>

);

