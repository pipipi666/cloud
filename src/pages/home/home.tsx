import styles from "./home.module.scss";
import { MainButton } from "../../components/UI/main-button/main-button";
import { MainInput } from "../../components/UI/main-input/main-input";
import { Container } from "../../components/container/container";
import { InputList } from "../../components/input-list/input-list";

export const HomePage = () => {
  return (
    <Container>
      <div className={styles.inputs}>
        <InputList>
          <MainInput
            label="Номер телефона"
            placeholder="+7 999 999-99-99"
            disabled
          />
          <MainInput
            label="Email"
            placeholder="vitalina.mingazova@yandex.ru"
            disabled
          />
        </InputList>
      </div>
      <MainButton>Начать</MainButton>
    </Container>
  );
};
