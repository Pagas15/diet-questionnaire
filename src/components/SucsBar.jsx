import React from 'react';
import Icon from '../Icons/Icon';

const SucsBar = ({ num, ollNum, onClickPrew, className }) => {
  const percent = Math.floor((100 / ollNum) * num);
  const classNameNew = !!className ? `suckBar ${className}` : 'suckBar';
  return (
    <div className={classNameNew}>
      <div className="suckBar__line line">
        <div className="line__sucs" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="suckBar__buttom">
        <button className="btnPrev iconCircle" onClick={onClickPrew}>
          <Icon type="arrowLeft" />
        </button>
        <div className="suckBar__nums">
          <span>{num}</span>/{ollNum}
        </div>
      </div>
    </div>
  );
};

export default SucsBar;
