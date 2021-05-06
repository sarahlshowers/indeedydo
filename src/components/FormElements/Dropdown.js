import React from 'react';

const Dropdown = (props) => {
  return (
    <React.Fragment>
      <label className="heading3 u-block">{props.label}</label>
      <span className="text2--gray u-block">{props.subtext}</span>
      <div className="select dropdown__form-field">
        <select
          className="text3--gray u-block "
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onUpdateInput}
          value={props.value}
        >
          {props.menuOptions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
