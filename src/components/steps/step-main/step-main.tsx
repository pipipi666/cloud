import { ChangeEvent } from "react";
import { MainInput, InputList } from "components";
import { useDispatch } from "react-redux";
import { mainFormSet } from "services/slices/formSlice";
import { useAppSelector } from "utils/hooks";
import { Select } from "components/UI/select/select";
import { FormField } from "components/UI/field/form-field";

export const StepMain = () => {
  const dispatch = useDispatch();
  const { nickname, name, surname, sex } = useAppSelector(
    (state) => state.form.formMain
  );

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(mainFormSet({ name: e.target.name, value: e.target.value }));
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(mainFormSet({ name: "sex", value: e.target.value }));
  };

  return (
    <InputList>
      <li>
        <FormField id="field-nickname" label="NickName" tip="Tip">
          <MainInput
            id="field-nickname"
            name="nickname"
            value={nickname}
            onChange={onFormChange}
          />
        </FormField>
      </li>
      <li>
        <FormField id="field-name" label="Name" tip="Tip">
          <MainInput
            id="field-name"
            name="name"
            value={name}
            onChange={onFormChange}
          />
        </FormField>
      </li>
      <li>
        <FormField id="field-surname" label="Surname" tip="Tip">
          <MainInput
            id="field-surname"
            name="surname"
            value={surname}
            onChange={onFormChange}
          />
        </FormField>
      </li>
      <li>
        <FormField id="field-sex" label="Sex" tip="Tip">
          <Select
            id="field-sex"
            name="sex"
            value={sex}
            onChange={onSelectChange}
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
