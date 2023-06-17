import styles from "./form.module.scss";
import { useNavigate } from "react-router";
import { ChangeEvent, useCallback, useState } from "react";
import { Formik, Form } from "formik";
import { fetchForm, mainFormSet } from "services/slices/formSlice";
import { ROUTES, useAppSelector } from "utils";
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
import { useAppDispatch } from "utils/hooks";

export const FormPage = () => {
  const [step, setStep] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const about = useAppSelector((state) => state.form.formMain.about);
  const { success, failed, request } = useAppSelector((state) => state.form);

  const initialValues = {
    nickname: "",
    name: "",
    surname: "",
    sex: "",
    checkbox: "",
    radio: "",
    about: "",
  };

  const handlePrevClick = useCallback(() => {
    if (!step) navigate(-1);
    else setStep(step - 1);
  }, [step]);

  const handleNextClick = useCallback(() => {
    if (step === 2) {
      dispatch(fetchForm());
    } else setStep(step + 1);
  }, [step]);

  const handleSuccessClick = useCallback(() => {
    navigate(ROUTES.MAIN);
  }, [step]);

  const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(mainFormSet({ name: e.target.name, value: e.target.value }));
  };

  return (
    <>
      <Container type="form">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Stepper step={step} />
            {step === 1 ? (
              <StepAdvantages />
            ) : step === 2 ? (
              <FormField
                id="field-about"
                label="About"
                tip="Maximum 200 characters"
              >
                <Textarea
                  id="field-about"
                  name="about"
                  value={about}
                  placeholder="Tell about yourself"
                  onChange={onTextareaChange}
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
              <MainButton
                id="button-next"
                onClick={handleNextClick}
                btnType={step === 2 ? "submit" : "button"}
              >
                Далее
              </MainButton>
            </div>
          </Form>
        </Formik>
      </Container>
      {!request && (success || failed) && <ModalContent isSuccess={success} />}
    </>
  );
};
