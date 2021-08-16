import React, { useState, useEffect } from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import { steps } from '../Json/Steps';
import Text from './QuestionTypes/Text';
import Numeric from './QuestionTypes/Numeric';
import Boolean from './QuestionTypes/Boolean';
import Dropdown from './QuestionTypes/Dropdown';

const ThirdStep = ({
  errorClassHandler,
  HeroJSON,
  formStateHandler,
  form,
  setForm,
  step3,
  scrollToView,
  hero,
}) => {
  const { stepThreeValue } = steps;
  const questions = stepThreeValue.fields;
  const step = HeroJSON.step3;
  const { button, index } = step;
  const [errorValue, setError] = useState(false);

  const stateHandler = () => {
    stepThreeValue.fields.map((value) => {
      const formField = value.stateName;
      form[formField] = '';
      setForm({ ...form });
    });
  };

  useEffect(() => {
    stateHandler();
  }, []);

  const checkEmpty = () => {
    const result = stepThreeValue.fields.map((value) => {
      const formField = value.stateName;
      if (form[formField] === '') {
        setError(true);
        return true;
      }
      return false;
    });
    // Check whether array includes error of empty input
    return result.some((value) => value === true);
  };

  const errorHandler = (e) => {
    e.preventDefault();
    if (checkEmpty()) return;
    form.step === index && formStateHandler({ field: 'step', value: 4 });
    setError(false);
    scrollToView(hero);
  };

  const questionTypeHandler = (fields) => {
    if (fields.questionType === 'text') {
      return (
        <Text
          errorValue={errorValue}
          fields={fields}
          formStateHandler={formStateHandler}
          errorClassHandler={errorClassHandler}
        />
      );
    }
    if (fields.questionType === 'numeric') {
      return (
        <Numeric
          errorValue={errorValue}
          fields={fields}
          formStateHandler={formStateHandler}
          errorClassHandler={errorClassHandler}
        />
      );
    }
    if (fields.questionType === 'boolean') {
      return (
        <Boolean
          errorValue={errorValue}
          fields={fields}
          formStateHandler={formStateHandler}
          errorClassHandler={errorClassHandler}
        />
      );
    }
    if (fields.questionType === 'dropdown') {
      return (
        <Dropdown
          errorValue={errorValue}
          fields={fields}
          formStateHandler={formStateHandler}
          errorClassHandler={errorClassHandler}
        />
      );
    }
  };

  return (
    <form
      ref={step3}
      onSubmit={(e) => errorHandler(e)}
      className={`${style.wrapper}  ${style.stepFirst} ${
        form.step !== index ? style.disableEvents : ''
      }`}
      id='step1'
    >
      <div className={style.step}>
        <strong>Step {index}</strong>
        <p>of 3</p>
      </div>
      <div className={style.input_container}>
        {questions.map((fields, index) => (
          <div key={index}>{questionTypeHandler(fields)}</div>
        ))}
      </div>
      <div className={style.stepSecondBtnPd}>
        <span type='submit'>
          <Button
            submit
            size='btnLg'
            type={`${form.step === index ? 'btnGreen' : 'btnGray'}`}
            text={stepThreeValue.button}
          />
        </span>
        {errorValue && <ErrorMessage />}
      </div>
    </form>
  );
};

export default ThirdStep;
