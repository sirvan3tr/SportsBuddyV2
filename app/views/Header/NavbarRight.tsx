import * as React from 'react';
import { Link } from 'react-router';

interface IProps {
}

interface IState {
}

export default class NavbarHeader extends React.Component<IProps, IState> {
  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">About</Link></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Invalid Dropdown<span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Invalid Link</a></li>
            <li><a href="#">Invalid Link</a></li>
            <li><a href="#">Invalid Link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Invalid Link</a></li>
          </ul>
        </li>
      </ul>
    )
  }
}
