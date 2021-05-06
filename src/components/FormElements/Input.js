import React from 'react';

const Input = (props) => {
  return (
    <React.Fragment>
      <label className="heading3 u-block">{props.label}</label>
      <span className="text2--gray u-block">{props.subtext}</span>
      <input
        className="input__form-field u-block"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onUpdateInput}
        required
      />
      <span className="input__error" aria-live="polite"></span>
    </React.Fragment>
  );
};

export default Input;
