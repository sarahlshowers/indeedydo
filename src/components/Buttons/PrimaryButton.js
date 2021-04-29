import React, { Component } from 'react';

class PrimaryButton extends Component {
  render() {
    return <button className="primary-button">{this.props.buttonText}</button>;
  }
}

export default PrimaryButton;
