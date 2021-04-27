import React, { Component } from 'react';
import AvatarSmall from '../Avatars/AvatarSmall';

class LockUp extends Component {
  render() {
    return  <div className="lockup">
              <AvatarSmall />

              <div className="lockup__user-info">
                <p className="heading3--white">User Name</p>
                <p className="text1--white">Job Title</p>
              </div>
            </div>
  }
}

export default LockUp;