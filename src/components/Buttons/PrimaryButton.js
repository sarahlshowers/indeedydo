import React from 'react';

const PrimaryButton = (props) => {
  function handleClick(e) {
    if (props.handleClick) {
      props.handleClick(e);
    }
  }

  return (
    <button className="primary-button" type={props.type} onClick={handleClick}>
      {props.buttonText}
    </button>
  );
};

export default PrimaryButton;
