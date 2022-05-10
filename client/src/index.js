import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from './App.jsx';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './Reducers';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

