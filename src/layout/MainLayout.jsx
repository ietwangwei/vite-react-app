import React from 'react';

import Locales from './Locales';
import Welcome from './Welcome';

import './index.scss';

const MainLayout = () => (
  <div className="main-layout">
    <i className="if if-logo" />
    <Locales />
    <Welcome />
  </div>
);

export default MainLayout;
