import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <React.Fragment>
        <label className="heading3 u-block">{this.props.label}</label>
        <span className="text2--gray u-block">{this.props.subtext}</span>
        <input
          className="input__form-field u-block"
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
        />
      </React.Fragment>
    );
  }
}

export default Input;
