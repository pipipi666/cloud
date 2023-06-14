import styles from "./form.module.scss";
import { useNavigate } from "react-router";
import { useCallback, useState } from "react";
import {
  Container,
  MainInput,
  MainButton,
  Stepper,
  StepMain,
  StepAdvantages,
} from "../../components";

export const FormPage = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const handlePrevClick = useCallback(() => {
    if (!step) navigate(-1);
    else setStep(step - 1);
  }, [step]);

  const handleNextClick = useCallback(() => {
    setStep(step + 1);
  }, [step]);

  return (
    <Container type="form">
      <form>
        <Stepper step={step} />
        {step ? (
          step === 1 ? (
            <StepAdvantages />
          ) : (
            <MainInput
              id="field-about"
              label="About"
              tip="Tip"
              type="textarea"
            />
          )
        ) : (
          <StepMain />
        )}
        <div className={styles.btns}>
          <MainButton id="button-back" type="outline" onClick={handlePrevClick}>
            Назад
          </MainButton>
          <MainButton id="button-next" onClick={handleNextClick}>
            Далее
          </MainButton>
        </div>
      </form>
    </Container>
  );
};
