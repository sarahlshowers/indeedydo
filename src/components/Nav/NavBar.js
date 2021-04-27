import React, { Component } from 'react';
import LockUp from '../LockUps/LockUp';

class NavBar extends Component {
  render() {
    return  <nav className="nav-bar">
              <LockUp />
            </nav>
  }
}

export default NavBar;