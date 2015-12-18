import * as React from 'react';
import NavbarHeader from './Header/NavbarHeader';
import NavbarLeft from './Header/NavbarLeft';
import NavbarRight from './Header/NavbarRight';

interface IProps {
}

interface IState {
}

export default class Header extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <NavbarHeader />
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <NavbarLeft />
              <NavbarRight />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
