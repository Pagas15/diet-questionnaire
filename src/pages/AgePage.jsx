import React from 'react';
import Header from '../components/Header';
import CardPerson from '../components/CartPerson';
import Icon from '../Icons/Icon';

const AgePage = ({ bgSrc = '', onSelect, gender }) => {
  const boolean = gender === 'male';
  const srcs = boolean
    ? [
        './assets/image/person/man1.png',
        './assets/image/person/man2.png',
        './assets/image/person/man3.png',
        './assets/image/person/man4.png',
      ]
    : [
        './assets/image/person/girl3.png',
        './assets/image/person/girl4.png',
        './assets/image/person/girl1.png',
        './assets/image/person/girl5.png',
      ];

  const bgImage = boolean
    ? './assets/image/elements/headerM.png'
    : './assets/image/elements/headerG.png';

  const images =
    window.innerWidth > 768 ? (
      <>
        <div style={{ position: 'absolute', top: '32px', left: '-152px' }}>
          <img src="./assets/image/Leaf_PNG_wfes.png" alt="" />
        </div>
        <div style={{ position: 'absolute', top: '50px', right: '-250px' }}>
          <img src="./assets/image/Leaf_PNG_Clipart 2.png" alt="" />
        </div>
      </>
    ) : (
      <>
        <div style={{ position: 'absolute', top: '128px', left: '24px' }}>
          <img src="./assets/image/blueberries-blueberry-sch-boden-spies-7 1.png" alt="" />
        </div>
        <div style={{ position: 'absolute', top: '112px', right: '0px' }}>
          <img src="./assets/image/Leaf_PNG_Clipart4.png" alt="" />
        </div>
      </>
    );
  return (
    <div className="appPage mainPage agePage" style={{ backgroundImage: `url(${bgSrc})` }}>
      <Header bgImage={bgImage} className={boolean ? 'header--male' : 'header--female'}>
        {images}
      </Header>
      <div className="mainPage__cards">
        <CardPerson
          onClick={() => {
            onSelect('18-24');
          }}
          src={srcs[0]}
          type={gender}
          text="18-24"
        />
        <CardPerson
          onClick={() => {
            onSelect('25-34');
          }}
          src={srcs[1]}
          type={gender}
          text="25-34"
        />
        <CardPerson
          onClick={() => {
            onSelect('35-44');
          }}
          src={srcs[2]}
          type={gender}
          text="35-44"
        />
        <CardPerson
          onClick={() => {
            onSelect('45+');
          }}
          src={srcs[3]}
          type={gender}
          text="45+"
        />
      </div>
      <div className="titleArrow">
        <Icon type="doubleArrowTop" style={{ fill: boolean ? '#3D44FF' : '#AB1CA4' }} />
        <p className="title">
          ВЫБЕРИ СВОЙ <span className="w800">ВОЗРАСТ</span>
        </p>
      </div>
      <div
        className="mainPage__shadow"
        style={{ background: boolean ? '#3da2ff' : '#f979f4' }}></div>
    </div>
  );
};

export default AgePage;
