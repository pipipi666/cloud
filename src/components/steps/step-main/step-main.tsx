import { ChangeEvent, useCallback } from "react";
import { MainInput, InputList, Select, FormField } from "components";
import { useDispatch } from "react-redux";
import { mainFormSet } from "services/slices/formSlice";
import { useAppSelector } from "utils";

export const StepMain = () => {
  const dispatch = useDispatch();
  const { errors } = useAppSelector((state) => state.form);
  const { nickname, name, surname, sex } = useAppSelector(
    (state) => state.form.formMain
  );

  const onFormChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(mainFormSet({ name: e.target.name, value: e.target.value }));
  }, []);

  const onSelectChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(mainFormSet({ name: "sex", value: e.target.value }));
  }, []);

  return (
    <InputList>
      <li>
        <FormField
          id="field-nickname"
          label="NickName"
          tip="Letters and numbers up to 30 characters"
          errorMessage="Field should contain only letters or digits up to 30 characters"
          error={errors.nickname}
        >
          <MainInput
            id="field-nickname"
            name="nickname"
            value={nickname}
            placeholder="NickName"
            onInput={onFormChange}
            error={errors.nickname}
          />
        </FormField>
      </li>
      <li>
        <FormField
          id="field-name"
          label="Name"
          tip="Letters up to 50 characters"
          errorMessage="Field should contain only letters up to 50 characters"
          error={errors.name}
        >
          <MainInput
            id="field-name"
            name="name"
            value={name}
            placeholder="Name"
            onInput={onFormChange}
            error={errors.name}
          />
        </FormField>
      </li>
      <li>
        <FormField
          id="field-surname"
          label="Surname"
          tip="Letters up to 50 characters"
          errorMessage="Field should contain only letters up to 50 characters"
          error={errors.surname}
        >
          <MainInput
            id="field-surname"
            name="surname"
            value={surname}
            placeholder="Surname"
            onInput={onFormChange}
            error={errors.surname}
          />
        </FormField>
      </li>
      <li>
        <FormField
          id="field-sex"
          label="Sex"
          tip="Choose your sex"
          errorMessage="Choose your sex"
          error={errors.sex}
        >
          <Select
            id="field-sex"
            name="sex"
            value={sex}
            onChange={onSelectChange}
            error={errors.sex}
          >
            <option id="field-sex-option-man" value="man">
              man
            </option>
            <option id="field-sex-option-woman" value="woman">
              woman
            </option>
          </Select>
        </FormField>
      </li>
    </InputList>
  );
};
