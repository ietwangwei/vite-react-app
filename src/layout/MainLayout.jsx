import React from 'react';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import { themeModeState } from 'stores/themeStore';

import MainAside from './MainAside';
import MainHeader from './MainHeader';

import './index.scss';

const MainLayout = ({ route }) => {
  const themeMode = useRecoilValue(themeModeState);

  return (
    <div className={clsx('main-layout', `is-${themeMode}`)}>
      <MainHeader />
      <div className="is-horizontal">
        <MainAside />
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  route: PropTypes.object,
};

export default withRouter(MainLayout);
