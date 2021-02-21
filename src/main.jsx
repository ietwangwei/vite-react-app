import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import 'styles/main.scss';
import './assets/fonts/if.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log(BASE_URL);
