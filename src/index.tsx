import 'normalize.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'entry';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
