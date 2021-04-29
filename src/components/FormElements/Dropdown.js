import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <React.Fragment>
        <label className="heading3 u-block">{this.props.label}</label>
        <span className="text2--gray u-block">{this.props.subtext}</span>
        <div className="select dropdown__form-field">
          <select
            className="text3--gray u-block "
            id={this.props.id}
            placeholder={this.props.placeholder}
          >
            {this.props.menuOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
