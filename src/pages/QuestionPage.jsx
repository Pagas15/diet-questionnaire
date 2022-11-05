import React from 'react';
import HeaderQuestions from '../components/HeaderQuestions';

const QuestionPage = ({ bgSrc = '', boolean, num, ollNum, onClickPrew, questTion, text }) => {
  return (
    <div className="appPage questionPage" style={{ backgroundImage: `url(${bgSrc})` }}>
      <HeaderQuestions
        boolean={boolean}
        num={num}
        ollNum={ollNum}
        onClickPrew={onClickPrew}
        text={text}
      />
      {questTion}
    </div>
  );
};

export default QuestionPage;
