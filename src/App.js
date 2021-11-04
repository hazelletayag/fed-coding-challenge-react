import {Router, Route, Switch} from 'react-router-dom';
import history from './history';

import './styles/global.scss';
import Home from './pages/home';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
