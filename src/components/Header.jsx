import React from 'react';

const Header = ({ children, bgImage = './assets/image/elements/header.png', className }) => {
  const newClassName = !!className ? `header ${className}` : 'header';
  return (
    <div className={newClassName}>
      <p className="header__title">
        <span>СБАЛАНСИРОВАННОЕ</span> ПИТАНИЕ
      </p>
      <p className="header__subTitle">
        <span>В СООТВЕТСТВИИ</span> С ВАШИМ ВОЗРАСТОМ
      </p>
      <p className="header__time">ОПРОС ЗАЙМЕТ МЕНЕЕ 1 МИНУТЫ</p>
      <div className="header__bg" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="header__shadow"></div>
      {children}
    </div>
  );
};

export default Header;
