import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import './initLocale.jsx';

import App from './App.jsx';

import 'styles/main.scss';
import './assets/fonts/if.scss';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// eslint-disable-next-line no-console
console.log(BASE_URL);
