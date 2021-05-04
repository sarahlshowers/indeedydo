import React from 'react';

const PrimaryButton = (props) => {
  function handleClick(e) {
    if (props.onHandleClick) {
      props.onHandleClick();
    }
  }

  return (
    <button className="primary-button" type={props.type} onClick={handleClick}>
      {props.buttonText}
    </button>
  );
};

export default PrimaryButton;
