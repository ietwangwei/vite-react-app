import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import routes from 'routes/index';

import useProgress from './hooks/useProgress.js';

import 'styles/App.scss';

const App = () => {
  useProgress();

  return (
    <RecoilRoot>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
