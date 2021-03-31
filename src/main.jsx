import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import './initLocale.jsx';

import App from './App.jsx';

import 'styles/main.scss';
import './assets/fonts/if.scss';

const rootEl = document.createElement('div');
rootEl.id = 'root';
document.body.insertBefore(rootEl, document.body.childNodes[0]);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootEl
);

// eslint-disable-next-line no-console
// console.log(import.meta.env);
