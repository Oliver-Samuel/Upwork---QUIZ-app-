import React, { useState, useEffect } from 'react';
import style from '../Scss/Steps.module.scss';
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import { steps } from '../Json/headless';
import QuesionTypeHandler from '../Handlers/QuestionTypeHandler';

const SecondStep = ({
  errorClassHandler,
  HeroJSON,
  formStateHandler,
  form,
  setForm,
  step2,
  step3,
  scrollToView,
}) => {
  const { stepTwoValue } = steps;
  const questions = stepTwoValue.fields;
  const { index } = stepTwoValue;
  const [errorValue, setError] = useState(false);

  const stateHandler = () => {
    stepTwoValue.fields.map((value) => {
      const formField = value.stateName;
      form[formField] = '';
      setForm({ ...form });
    });
  };

  useEffect(() => {
    stateHandler();
  }, []);

  const checkEmpty = () => {
    const result = stepTwoValue.fields.map((value) => {
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
    form.step === index && formStateHandler({ field: 'step', value: 3 });
    setError(false);
    scrollToView(step3);
  };

  return (
    <form
      ref={step2}
      onSubmit={(e) => errorHandler(e)}
      className={`${style.wrapper}  ${style.stepSecond} ${
        form.step !== index ? style.disableEvents : ''
      }`}
    >
      <div className={style.step}>
        <strong>Step {index}</strong>
        <p>of 3</p>
      </div>
      <div className={style.input_container}>
        {questions.map((fields, index) =>
          QuesionTypeHandler(
            fields,
            index,
            errorValue,
            formStateHandler,
            errorClassHandler
          )
        )}
      </div>
      <div className={style.stepSecondBtnPd}>
        <span onClick={checkEmpty} type='submit'>
          <Button
            submit
            size='btnLg'
            type={`${form.step === index ? 'btnBlue' : 'btnGray'}`}
            text={stepTwoValue.button}
          />
        </span>
        {errorValue && <ErrorMessage />}
      </div>
    </form>
  );
};

export default SecondStep;
