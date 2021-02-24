import { Redirect } from 'react-router-dom';

// eslint-disable-next-line react/display-name
const redirect = path => () => <Redirect to={path}></Redirect>;

export { redirect };
