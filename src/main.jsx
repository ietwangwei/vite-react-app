import React from 'react';
import ReactDOM from 'react-dom';

import './initLocale';

import App from './App';

import 'styles/main.scss';
import './assets/fonts/if.scss';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// eslint-disable-next-line no-console
console.log(BASE_URL);
