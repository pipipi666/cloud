import styles from "./form.module.scss";
import { useNavigate } from "react-router";
import { ChangeEvent, FormEventHandler, useCallback, useState } from "react";
import { fetchForm, mainFormSet, setError } from "services/slices/formSlice";
import { useAppSelector, useAppDispatch, SCHEMA } from "utils";
import {
  Container,
  MainButton,
  Stepper,
  StepMain,
  StepAdvantages,
  ModalContent,
  FormField,
  Textarea,
} from "components";
import { Schema } from "yup";

export const FormPage = () => {
  const [step, setStep] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { about, nickname, name, surname, sex, radio } = useAppSelector(
    (state) => state.form.formMain
  );
  const { errors, advantages, success, failed, request } = useAppSelector(
    (state) => state.form
  );

  const handlePrevClick = useCallback(() => {
    step ? setStep(step - 1) : navigate(-1);
  }, [step, navigate]);

  const check = async (schema: Schema, value: string | string[]) => {
    const res = await schema.isValid(value);
    return res;
  };

  const handleNextClick = async (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    if (step === 2) return;
    if (step === 0) {
      if (!(await check(SCHEMA.NICKNAME, nickname))) {
        dispatch(setError({ name: "nickname", value: true }));
        return;
      }
      if (!(await check(SCHEMA.NAME, name))) {
        dispatch(setError({ name: "name", value: true }));
        return;
      }
      if (!(await check(SCHEMA.SURNAME, surname))) {
        dispatch(setError({ name: "surname", value: true }));
        return;
      }
      if (!(await check(SCHEMA.SEX, sex))) {
        dispatch(setError({ name: "sex", value: true }));
        return;
      }
    } else if (step === 1) {
      if (!(await check(SCHEMA.ADVANTAGES, advantages))) {
        dispatch(setError({ name: "advantages", value: true }));
        return;
      }
      if (!(await check(SCHEMA.RADIO, radio))) {
        dispatch(setError({ name: "radio", value: true }));
        return;
      }
    }
    setStep(step + 1);
  };

  const handleSubmit = useCallback(
    async (e: FormEventHandler<HTMLFormElement>) => {
      const res = await SCHEMA.ABOUT.isValid(about);
      res
        ? dispatch(fetchForm())
        : dispatch(setError({ name: "about", value: true }));
    },
    [about, dispatch]
  );

  const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(mainFormSet({ name: e.target.name, value: e.target.value }));
  };

  return (
    <>
      <Container type="form">
        <form onSubmit={() => handleSubmit}>
          <Stepper step={step} />
          {step === 1 ? (
            <StepAdvantages />
          ) : step === 2 ? (
            <FormField
              id="field-about"
              label="About"
              tip="Maximum 200 characters"
              errorMessage="Field should contain up to 200 characters"
              error={errors.about}
            >
              <Textarea
                id="field-about"
                name="about"
                value={about}
                placeholder="Tell about yourself"
                onChange={onTextareaChange}
                error={errors.about}
              />
            </FormField>
          ) : (
            <StepMain />
          )}
          <div className={styles.btns}>
            <MainButton
              id="button-back"
              type="outline"
              onClick={handlePrevClick}
            >
              Назад
            </MainButton>
            {step === 2 ? (
              <MainButton id="button-send" btnType="submit">
                Отправить
              </MainButton>
            ) : (
              <MainButton
                id="button-next"
                onClick={handleNextClick}
                btnType="button"
              >
                Далее
              </MainButton>
            )}
          </div>
        </form>
      </Container>
      {!request && (success || failed) && <ModalContent isSuccess={success} />}
    </>
  );
};
