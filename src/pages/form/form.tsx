import styles from "./form.module.scss";
import { useNavigate } from "react-router";
import { ChangeEvent, useCallback, useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { mainFormSet } from "services/slices/formSlice";
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

export const FormPage = () => {
  const [step, setStep] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const about = useAppSelector((state) => state.formMain.about);

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
    if (step === 2) setIsModal(true);
    else setStep(step + 1);
  }, [step]);

  const handleSuccessClick = useCallback(() => {
    navigate(ROUTES.HOME);
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
              <FormField id="field-about" label="About" tip="Tip">
                <Textarea
                  id="field-about"
                  name="about"
                  value={about}
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
      {isModal && <ModalContent />}
    </>
  );
};
