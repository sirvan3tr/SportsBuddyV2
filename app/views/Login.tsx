import * as React from 'react';
import Authentication from '../Authentication';

interface IProps {
}

interface IState {
  loggedIn: boolean
}

export default class Home extends React.Component<IProps, IState> {
  constructor(props : IProps) {
    super(props);
    this.state = {loggedIn: false};
    new Authentication().isLoggedIn(function(bool:boolean) {
      console.log(bool);
      this.setState({loggedIn : bool});
    }.bind(this));
  }
  render() {
    var loggedInOut = <div></div>;
    if(this.state.loggedIn) {
      loggedInOut = <div>You are already logged in!</div>;
    }
    else {
      loggedInOut = <div><a href="/auth/facebook">Login</a></div>;
    }
    return (
      <div>{loggedInOut}</div>
    );
  }
}
