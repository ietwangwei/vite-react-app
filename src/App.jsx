import React from 'react';
import { Inspector } from 'react-dev-inspector';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import routes from 'routes/index';

import useProgress from './hooks/useProgress.js';

import 'styles/App.scss';

const { MODE } = import.meta.env;
const isDev = MODE === 'dev';

const App = () => {
  useProgress();

  return (
    <Inspector
      keys={['control', 'shift', 'command', 'c']}
      disableLaunchEditor={!isDev}
    >
      <RecoilRoot>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </RecoilRoot>
    </Inspector>
  );
};

export default App;
