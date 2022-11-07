import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ButtonNext from './components/ButtonNext';
import CountSize from './components/CountSize';
import AgePage from './pages/AgePage';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import Select from './pages/Select';
import { emptyAnswers, pathCol, questions } from './utill/const';

function App() {
  const [answers, setAnswers] = useState(() => {
    const storage = JSON.parse(localStorage.getItem('answers'));
    return storage || emptyAnswers;
  });
  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [answers]);
  const navigate = useNavigate();
  const boolean = answers.gender === 'male';
  const desctopBoolean = window.innerWidth > 768;

  const changeRusultItem = (name, result) => {
    setAnswers({ ...answers, [name]: result });
  };

  const changeGender = (result) => {
    changeRusultItem('gender', result);
    navigate(pathCol.AGE);
  };
  const changeAge = (result) => {
    changeRusultItem('age', result);
    navigate(pathCol.QUESTION1);
  };
  const changeQuestion = (num, result) => {
    changeRusultItem('question' + num, result);
    navigate(pathCol['QUESTION' + (num + 1)]);
  };
  const changeQuestion16 = (result) => {
    changeRusultItem('question16', result);
  };
  return (
    <div className="app">
      <Routes>
        <Route
          path={pathCol.INDEX}
          element={
            <MainPage
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}main.jpg`}
              onSelect={changeGender}
            />
          }
        />
        <Route
          path={pathCol.AGE}
          element={
            <AgePage
              gender={answers.gender}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}age.jpg`}
              onSelect={changeAge}
            />
          }
        />
        <Route
          path={pathCol.QUESTION1}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question1.jpg`}
              num={1}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.AGE);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs1}
                  onSelect={(result) => {
                    changeQuestion(1, result);
                  }}
                />
              }
              text={
                <>
                  Вы когда-нибудь <br />
                  пользовались{' '}
                  <span className="w800">
                    персональным <br />
                    планом
                  </span>{' '}
                  питания?
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION2}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question2.jpg`}
              num={2}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION1);
              }}
              questTion={
                <div>
                  <CountSize
                    placeholder={0}
                    style={{ borderColor: boolean ? '#3D44FF' : '#F979F4', marginBottom: '40px' }}
                    typeName="СМ"
                    max={250}
                    value={answers.question2}
                    setValue={(result) => {
                      changeRusultItem('question2', result);
                    }}
                  />
                  <ButtonNext
                    onClick={() => {
                      navigate(pathCol.QUESTION3);
                    }}
                    text="Далее"
                    boolean={boolean}
                  />
                </div>
              }
              text={<>Ваш рост (см)</>}
            />
          }
        />
        <Route
          path={pathCol.QUESTION3}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question3.jpg`}
              num={3}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION2);
              }}
              questTion={
                <div>
                  <CountSize
                    placeholder={'Вес'}
                    style={{ borderColor: boolean ? '#3D44FF' : '#F979F4', marginBottom: '40px' }}
                    typeName="КГ"
                    max={150}
                    value={answers.question3}
                    setValue={(result) => {
                      changeRusultItem('question3', result);
                    }}
                  />
                  <ButtonNext
                    onClick={() => {
                      navigate(pathCol.QUESTION4);
                    }}
                    text="Далее"
                    boolean={boolean}
                  />
                  <img
                    src="./assets/image/weights.png"
                    style={{
                      maxWidth: '80%',
                      margin: 'auto',
                      marginTop: '67px',
                      display: 'block',
                    }}
                    alt=""
                  />
                </div>
              }
              text={<>Ваш текущий вес (кг)</>}
            />
          }
        />
        <Route
          path={pathCol.QUESTION4}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question4.jpg`}
              num={4}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION3);
              }}
              questTion={
                <div>
                  <CountSize
                    placeholder={'Вес'}
                    style={{ borderColor: boolean ? '#3D44FF' : '#F979F4', marginBottom: '40px' }}
                    typeName="КГ"
                    max={150}
                    value={answers.question4}
                    setValue={(result) => {
                      changeRusultItem('question4', result);
                    }}
                  />
                  <ButtonNext
                    onClick={() => {
                      navigate(pathCol.QUESTION5);
                    }}
                    text="Далее"
                    boolean={boolean}
                  />
                  <img
                    src={
                      boolean ? './assets/image/planeMale.png' : './assets/image/planeFemale.png'
                    }
                    style={{
                      maxWidth: '100%',
                      margin: 'auto',
                      marginTop: '120px',
                      display: 'block',
                    }}
                    alt=""
                  />
                </div>
              }
              text={<>Желаемый вес (кг)</>}
            />
          }
        />
        <Route
          path={pathCol.QUESTION5}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question5.jpg`}
              num={5}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION4);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs5}
                  onSelect={(result) => {
                    changeQuestion(5, result);
                  }}
                />
              }
              text={
                <>
                  <span className="w700">Во сколько вы обычно</span>
                  <br /> <span className="w800">завтракаете?</span>
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION6}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question6.jpg`}
              num={6}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION5);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs6}
                  onSelect={(result) => {
                    changeQuestion(6, result);
                  }}
                />
              }
              text={
                <>
                  <span className="w700">Во сколько вы обычно</span>
                  <br /> <span className="w800">обедаете?</span>
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION7}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question7.jpg`}
              num={7}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION6);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs7}
                  onSelect={(result) => {
                    changeQuestion(7, result);
                  }}
                />
              }
              text={
                <>
                  <span className="w700">Во сколько вы обычно</span>
                  <br /> <span className="w800">ужинаете?</span>
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION8}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question8.jpg`}
              num={8}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION7);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs8}
                  onSelect={(result) => {
                    changeQuestion(8, result);
                  }}
                />
              }
              text={
                <>
                  <span className="w700">
                    Вы предпочитаете
                    <br /> <span className="w800">домашнюю?</span> еду или <br />
                    заказываете?
                  </span>
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION9}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question9.jpg`}
              num={9}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION8);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs9}
                  onSelect={(result) => {
                    changeQuestion(9, result);
                  }}
                />
              }
              text={
                <>
                  <span className="w700">
                    А как вы относитесь к
                    <br /> <span className="w800">разгрузочным</span> дням?
                  </span>
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION10}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question10.jpg`}
              num={10}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION9);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs10}
                  onSelect={(result) => {
                    changeQuestion(10, result);
                  }}
                />
              }
              text={
                <>
                  <span className="w700">
                    Как часто вы
                    <br /> занимаетесь <span className="w800">спортом?</span>
                  </span>
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION11}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question11.jpg`}
              num={11}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION10);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs11}
                  onSelect={(result) => {
                    changeQuestion(11, result);
                  }}
                />
              }
              text={
                <>
                  <span className="w700">
                    Какой у вас
                    <br /> график <span className="w800">работы?</span>
                  </span>
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION12}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question12.jpg`}
              num={12}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION11);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs12}
                  onSelect={(result) => {
                    changeQuestion(12, result);
                  }}
                />
              }
              text={
                <>
                  <span className="w700">
                    Насколько вы активны
                    <br /> <span className="w800">на работе?</span>
                  </span>
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION13}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question13.jpg`}
              num={13}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION12);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs13}
                  onSelect={(result) => {
                    changeQuestion(13, result);
                  }}
                />
              }
              text={
                <>
                  <span className="w700">
                    Сколько вы
                    <br /> обычно <span className="w800">спите?</span>
                  </span>
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION14}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question14.jpg`}
              num={14}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION13);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs14}
                  onSelect={(result) => {
                    changeQuestion(14, result);
                  }}
                />
              }
              text={
                <>
                  <span className="w700">
                    Сколько <span className="w800">воды?</span>
                    <br /> вы выпиваете <span className="w800">ежедневно?</span>
                  </span>
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION15}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question15.jpg`}
              num={15}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION14);
              }}
              questTion={
                <Select
                  boolean={boolean}
                  listVar={questions.qs15}
                  onSelect={(result) => {
                    changeQuestion(15, result);
                  }}
                />
              }
              text={
                <>
                  <span className="w700">
                    Насколько вы замотивированы
                    <br /> в своем <span className="w800">преображении?</span>
                  </span>
                </>
              }
            />
          }
        />
        <Route
          path={pathCol.QUESTION16}
          element={
            <QuestionPage
              boolean={boolean}
              bgSrc={`./assets/image/background/${desctopBoolean ? '' : 'mobile/'}question16.jpg`}
              num={16}
              ollNum={16}
              onClickPrew={() => {
                navigate(pathCol.QUESTION15);
              }}
              questTion={
                <Select boolean={boolean} listVar={questions.qs16} onSelect={changeQuestion16} />
              }
              text={
                <>
                  <span className="w700">
                    Когда вы в последний раз были
                    <br /> <span className="w800">в желаемом весе?</span>
                  </span>
                </>
              }
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
