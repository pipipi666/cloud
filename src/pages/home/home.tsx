import { useCallback } from "react";
import { useNavigate } from "react-router";
import styles from "./home.module.scss";
import { LINKS } from "../../utils/consts/mock";
import { ROUTES } from "../../utils/consts/routes";
import {
  MainButton,
  MainInput,
  Container,
  InputList,
  LinkList,
} from "../../components";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(ROUTES.CREATE);
  }, []);

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
              isLarge
              disabled
            />
          </li>
          <li>
            <MainInput
              label="Email"
              placeholder="tim.jennings@example.com"
              isLarge
              disabled
            />
          </li>
        </InputList>
      </div>
      <MainButton onClick={handleClick}>Начать</MainButton>
    </Container>
  );
};
