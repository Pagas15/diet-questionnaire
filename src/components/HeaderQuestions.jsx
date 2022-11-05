import React from 'react';
import Icon from '../Icons/Icon';
import SucsBar from './SucsBar';

const HeaderQuestions = ({ boolean, text, num, ollNum, onClickPrew }) => {
  return (
    <div className="headerQuestion">
      <div className="headerQuestion__shadow"></div>
      <SucsBar
        num={num}
        ollNum={ollNum}
        className={boolean ? 'suckBar--male' : 'suckBar--female'}
        onClickPrew={onClickPrew}
      />
      <div className="titleArrow">
        <p className="title">{text}</p>
        <Icon type="doubleArrowDown" style={{ fill: boolean ? '#3D44FF' : '#AB1CA4' }} />
      </div>
    </div>
  );
};

export default HeaderQuestions;
