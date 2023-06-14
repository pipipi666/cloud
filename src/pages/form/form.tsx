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
import { ModalContent } from "../../components/modal/modal-content/modal-content";
import { ROUTES } from "../../utils/consts/routes";

export const FormPage = () => {
  const [step, setStep] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
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

  return (
    <>
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
            <MainButton
              id="button-back"
              type="outline"
              onClick={handlePrevClick}
            >
              Назад
            </MainButton>
            <MainButton id="button-next" onClick={handleNextClick}>
              Далее
            </MainButton>
          </div>
        </form>
      </Container>
      {isModal && <ModalContent />}
    </>
  );
};
