import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './store/reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import socketIO from 'socket.io-client';
import socketIoMiddleware from 'redux-socket.io-middleware';

import App from './App';
import './styles/shared.css';

const io = socketIO.connect();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(socketIoMiddleware(io)))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
