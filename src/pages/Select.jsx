import React from 'react';
import Icon from '../Icons/Icon';

const Select = ({ boolean, activeItem, listVar, onSelect }) => {
  const list = listVar.map((item) => {
    const onClick = () => {
      onSelect(item.key);
    };
    const iconSrc =
      typeof item.icons === 'string' ? item.icons : boolean ? item.icons[0] : item.icons[1];

    return (
      <li className={'select__item' + (item.key === activeItem ? 'active' : '')} key={item.key}>
        <button className="select__btn" onClick={onClick}>
          <div className="select__icon">
            <img src={iconSrc} alt="" />
          </div>
          <div className="select__text">{item.text}</div>
          <div className="select__checkMark iconCircle">
            <Icon type="checkMark" />
          </div>
        </button>
      </li>
    );
  });
  return <ul className={'select ' + (boolean ? 'select--male' : 'select--female')}>{list}</ul>;
};

export default Select;
