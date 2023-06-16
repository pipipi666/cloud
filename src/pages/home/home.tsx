import { ChangeEvent, useCallback } from "react";
import { useNavigate } from "react-router";
import styles from "./home.module.scss";
import { useDispatch } from "react-redux";
import { mainFormSet } from "services/slices/formSlice";
import { ROUTES, LINKS, useAppSelector } from "utils";
import {
  MainButton,
  MainInput,
  Container,
  InputList,
  LinkList,
  FormField,
} from "components";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { phone, email } = useAppSelector((state) => state.formMain);

  const handleClick = useCallback(() => {
    navigate(ROUTES.CREATE);
  }, []);

  const onFormChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(mainFormSet({ name: e.target.name, value: e.target.value }));
  }, []);

  return (
    <Container>
      <div className={styles.info}>
        <div className={styles.avatar}>АИ</div>
        <div>
          <h2 className={styles.name}>Иван Иванов</h2>
          <LinkList links={LINKS} />
        </div>
      </div>
      <div className={styles.inputs}>
        <InputList>
          <li>
            <FormField id="field-phone" label="Номер телефона">
              <MainInput
                name="phone"
                placeholder="phone"
                id="field-phone"
                value={phone}
                onChange={onFormChange}
                isLarge
                disabled
              />
            </FormField>
          </li>
          <li>
            <FormField id="field-email" label="Email">
              <MainInput
                name="email"
                placeholder="email"
                id="field-email"
                value={email}
                onChange={onFormChange}
                isLarge
                disabled
              />
            </FormField>
          </li>
        </InputList>
      </div>
      <MainButton id="button-start" onClick={handleClick}>
        Начать
      </MainButton>
    </Container>
  );
};
