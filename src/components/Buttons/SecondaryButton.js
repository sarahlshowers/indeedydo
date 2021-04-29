import React, { Component } from 'react';

class SecondaryButton extends Component {
  render() {
    return (
      <button className="secondary-button">{this.props.buttonText}</button>
    );
  }
}

export default SecondaryButton;
