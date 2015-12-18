import * as React from 'react';
import { Link } from 'react-router';

interface IProps {
}

interface IState {
}

export default class NavbarHeader extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">SportsBuddy</Link>
      </div>
    );
  }
}
