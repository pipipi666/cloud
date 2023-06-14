import styles from "./form.module.scss";
import { Container } from "../../components/container/container";
import { InputList } from "../../components/input-list/input-list";
import { MainInput } from "../../components/UI/main-input/main-input";
import { MainButton } from "../../components/UI/main-button/main-button";
import { useNavigate } from "react-router";
import { useCallback, useState } from "react";
import { Stepper } from "../../components/UI/stepper/stepper";

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
        <div className={styles.inputs}>
          <InputList>
            <li>
              <MainInput label="NickName" tip="Tip" />
            </li>
            <li>
              <MainInput label="Name" tip="Tip" />
            </li>
            <li>
              <MainInput label="Surname" tip="Tip" />
            </li>
            <li>
              <MainInput label="Sex" tip="Tip" type="select" />
            </li>
          </InputList>
        </div>
        <div className={styles.btns}>
          <MainButton type="outline" onClick={handlePrevClick}>
            Назад
          </MainButton>
          <MainButton onClick={handleNextClick}>Далее</MainButton>
        </div>
      </form>
    </Container>
  );
};
