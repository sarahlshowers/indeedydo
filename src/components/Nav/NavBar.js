import React, { Component } from 'react';
import LockUp from '../LockUps/LockUp';

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="nav-bar grid-container">
          <div className="nav-bar__inner-wrapper">
            <LockUp />
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
