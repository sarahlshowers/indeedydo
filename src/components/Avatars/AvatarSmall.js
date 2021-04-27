import React, { Component } from 'react';

class AvatarSmall extends Component {
  render() {
    return (
      <img
        className="avatar__standard"
        src="./imgs/profile-pic.jpg"
        alt="current logged in user profile"
        aria-label="The profile image of the current logged in user"
      />
    );
  }
}

export default AvatarSmall;
