import styles from "./home.module.scss";
import { MainButton } from "../../components/UI/main-button/main-button";
import { MainInput } from "../../components/UI/main-input/main-input";
import { Container } from "../../components/container/container";
import { InputList } from "../../components/input-list/input-list";
import { LinkList } from "../../components/links-list/links-list";
import { LINKS } from "../../utils/consts/mock";

export const HomePage = () => {
  return (
    <Container>
      <div className={styles.info}>
        <div className={styles.avatar}>АИ</div>
        <div>
          <p className={styles.name}>Иван Иванов</p>
          <LinkList links={LINKS} />
        </div>
      </div>
      <div className={styles.inputs}>
        <InputList>
          <li>
            <MainInput
              label="Номер телефона"
              placeholder="+7 999 999-99-99"
              disabled
            />
          </li>
          <li>
            <MainInput
              label="Email"
              placeholder="tim.jennings@example.com"
              disabled
            />
          </li>
        </InputList>
      </div>
      <MainButton>Начать</MainButton>
    </Container>
  );
};
