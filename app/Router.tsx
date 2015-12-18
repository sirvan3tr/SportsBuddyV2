import * as React from 'react';
import Container from './views/Container';
import Home from './views/Home';
import About from './views/About';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { createHistory, useBasename } from 'history';

interface IProps {
}

interface IState {
}

const history = useBasename(createHistory)({
  basename: '/breadcrumbs'
});

export default class MyRouter extends React.Component<IProps, IState> {
  render() {
    return (<Router history={history}>
      <Route path="/" component={Container}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
      </Route>
    </Router>);
  }
}
