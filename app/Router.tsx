import * as React from 'react';
import Container from './views/Container';
import Home from './views/Home';
import About from './views/About';
import Login from './views/Login';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { createHashHistory } from 'history';

interface IProps {
}

interface IState {
}

const history = createHashHistory();

//function requireAuth(nextState:any, replaceState:any) {
//  if (!auth.loggedIn())
//    replaceState({ nextPathname: nextState.location.pathname }, '/login')
//}

export default class MyRouter extends React.Component<IProps, IState> {
  render() {
    return (<Router history={history}>
      <Route path="/" component={Container}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="login" component={Login} />
      </Route>
    </Router>);
  }
}
