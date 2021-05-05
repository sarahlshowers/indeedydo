import React from 'react';

const SecondaryButton = (props) => {
  function handleClick(e) {
    if (props.handleClick) {
      props.handleClick(e);
    }
  }

  return (
    <button className="secondary-button" onClick={handleClick}>
      {props.buttonText}
    </button>
  );
};

export default SecondaryButton;
