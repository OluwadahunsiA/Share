import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react';
import thunk from 'redux-thunk';
import reducer from './Reducers';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
