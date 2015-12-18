import * as React from 'react';
import { Link } from 'react-router';
import Authentication from '../../Authentication';

interface IProps {
}

interface IState {
  loggedIn:boolean
}


export default class NavbarHeader extends React.Component<IProps, IState> {
  constructor(props : IProps) {
    super(props);
    this.state = {loggedIn: false};
    new Authentication().isLoggedIn(function(bool) {
      console.log(bool);
      this.setState({loggedIn : bool});
    }.bind(this));
  }
  render() {
    var logOutIn;
    console.log(this.state.loggedIn);
    if(this.state.loggedIn) {
        logOutIn = <a href="/logout">Logout</a>;
    }
    else {
        logOutIn = <Link to="/login">Login</Link>;
    }
    console.log(logOutIn);
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/about">About</Link></li>
        <li>{logOutIn}</li>
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
