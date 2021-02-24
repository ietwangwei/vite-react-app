import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import routes from 'routes/index';

import 'styles/App.scss';

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
