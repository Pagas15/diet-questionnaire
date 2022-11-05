import React from 'react';
import Icon from '../Icons/Icon';

const CartPerson = ({ src, type, onClick, text }) => {
  let className = 'cardPerson';
  switch (type) {
    case 'male':
      className += ' cardPerson--male';
      break;
    case 'female':
      className += ' cardPerson--female';
      break;
    default:
      break;
  }
  return (
    <div className={className} onClick={onClick}>
      <div className="cardPerson__img">
        <img src={src} alt="" />
        <div className="cardPerson__checkMark">
          <Icon type="checkMark" />
        </div>
      </div>
      <p className="cardPerson__text">
        {text}
        <Icon type="doubleArrowRight" />
      </p>
    </div>
  );
};

export default CartPerson;
