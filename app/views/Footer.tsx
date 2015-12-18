import * as React from 'react';

interface IProps {
}

interface IState {
}

export default class Footer extends React.Component<IProps, IState> {
  render() {
    return (
      <div><div className="pull-right">&copy; 2015 Nigel Schuster</div><div className="clearfix"></div></div>
    );
  }
}
