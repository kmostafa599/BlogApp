import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';
import App from './App';

import { applyMiddleware, compose, createStore } from 'redux';
import { reducers } from './store/reducers';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';



const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

