import React from 'react';

const ButtonNext = ({ text, onClick, boolean }) => {
  return (
    <button
      className={'buttonNext ' + (boolean ? 'buttonNext--male' : 'buttonNext--female')}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonNext;
