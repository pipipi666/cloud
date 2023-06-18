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
import { setError } from "services/slices/formSlice";
import * as yup from "yup";

export const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { phone, email } = useAppSelector((state) => state.user.info);
  const { errors } = useAppSelector((state) => state.form);
  const emailSchema = yup.string().required().email();

  const handleClick = useCallback(async () => {
    const res = await emailSchema.isValid(email);
    if (!res) {
      dispatch(setError({ name: "email", value: true }));
      return;
    }
    navigate(ROUTES.CREATE);
  }, [email, emailSchema, dispatch, navigate]);

  const onFormChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(userFormSet({ name: e.target.name, value: e.target.value }));
    },
    [dispatch]
  );

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
                disabled
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
                onInput={onFormChange}
                error={errors.email}
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
