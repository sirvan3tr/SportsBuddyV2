import * as React from 'react';

interface IProps {
}

interface IState {
}

export default class Home extends React.Component<IProps, IState> {
  render() {
    return (
      <div><a href="/auth/facebook">Login</a></div>
    );
  }
}
