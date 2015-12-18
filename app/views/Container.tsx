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
      <div>
        <Header />
        <div className="panel panel-default">
          <div className="panel-body">
            {this.props.children}
          </div>
          <div className="panel-footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
