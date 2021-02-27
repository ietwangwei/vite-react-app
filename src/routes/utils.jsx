import { Redirect } from 'react-router-dom';

// eslint-disable-next-line react/display-name
const redirect = path => () => <Redirect to={path} />;

// eslint-disable-next-line import/prefer-default-export
export { redirect };
