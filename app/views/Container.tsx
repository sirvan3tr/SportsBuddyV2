import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

interface IProps {
  children: any;
}

interface IState {
}

export default class Container extends React.Component<IProps, IState> {
  render() {
    return (
      <div><Header />{this.props.children}<Footer /></div>
    );
  }
}
