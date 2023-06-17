import { ChangeEvent, useCallback } from "react";
import { useNavigate } from "react-router";
import styles from "./main.module.scss";
import { useDispatch } from "react-redux";
import { ROUTES, useAppSelector } from "utils";
import {
  MainButton,
  MainInput,
  Container,
  InputList,
  FormField,
} from "components";
import { UserInfo } from "components/user-info/user-info";
import { userFormSet } from "services/slices/userSlice";
import { PhoneInput } from "components/UI/phone-input/phone-input";

export const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { phone, email } = useAppSelector((state) => state.user.info);

  const handleClick = useCallback(() => {
    navigate(ROUTES.CREATE);
  }, []);

  const onFormChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(userFormSet({ name: e.target.name, value: e.target.value }));
  }, []);

  return (
    <Container>
      <UserInfo />
      <div className={styles.inputs}>
        <InputList>
          <li>
            <FormField id="field-phone" label="Номер телефона">
              <PhoneInput
                name="phone"
                id="field-phone"
                value={phone}
                onChange={onFormChange}
              />
            </FormField>
          </li>
          <li>
            <FormField id="field-email" label="Email">
              <MainInput
                type="email"
                name="email"
                placeholder="email"
                id="field-email"
                value={email}
                onChange={onFormChange}
                isLarge
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
