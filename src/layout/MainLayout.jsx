import React from 'react';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainLayout = ({ route }) => {
  return (
    <div>
      this is MainLayout component
      <i className="if if-logo"></i>
      {renderRoutes(route.routes)}
    </div>
  );
};

MainLayout.propTypes = {
  route: PropTypes.object,
};

export default withRouter(MainLayout);
