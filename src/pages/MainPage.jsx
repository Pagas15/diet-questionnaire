import React from 'react';
import Header from '../components/Header';
import CardPerson from '../components/CartPerson';
import Icon from '../Icons/Icon';

const MainPage = ({ bgSrc = '', onSelect }) => {
  const desctopBoolean = window.innerWidth > 768;
  const cardsMobDesc = desctopBoolean ? (
    <>
      <CardPerson
        onClick={() => {
          onSelect('female');
        }}
        src="./assets/image/person/girl1.png"
        type="female"
        text="Ж"
      />
      <CardPerson
        onClick={() => {
          onSelect('male');
        }}
        src="./assets/image/person/man1.png"
        type="male"
        text="М"
      />{' '}
    </>
  ) : (
    <>
      <CardPerson
        onClick={() => {
          onSelect('female');
        }}
        src="./assets/image/person/girl3.png"
        type="female"
        text="Ж"
      />
      <CardPerson
        onClick={() => {
          onSelect('male');
        }}
        src="./assets/image/person/man2.png"
        type="male"
        text="М"
      />
    </>
  );
  const images = desctopBoolean ? (
    <>
      <div style={{ position: 'absolute', top: '-82px', left: '-118px' }}>
        <img src="./assets/image/Leaf_PNG_Clipart 1.png" alt="" />
      </div>
      <div style={{ position: 'absolute', top: '227px', right: '-86px' }}>
        <img src="./assets/image/pngwing 4.png" alt="" />
      </div>
    </>
  ) : (
    <>
      <div style={{ position: 'absolute', top: '127px', left: '34px' }}>
        <img src="./assets/image/blueberries-blueberry-sch-boden-spies-7 1.png" alt="" />
      </div>
      <div style={{ position: 'absolute', top: '126px', right: '24px' }}>
        <img src="./assets/image/pngwing 2.png" alt="" />
      </div>
    </>
  );
  return (
    <div className="appPage mainPage" style={{ backgroundImage: `url(${bgSrc})` }}>
      <Header>{images}</Header>
      <div className="mainPage__cards">{cardsMobDesc}</div>
      <div className="titleArrow">
        <Icon type="doubleArrowTop" />
        <p className="title">
          ВЫБЕРИ СВОЙ <span className="w800">ПОЛ</span>
        </p>
      </div>
    </div>
  );
};

export default MainPage;
