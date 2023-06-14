import { MainInput } from "../../UI/main-input/main-input";
import { InputList } from "../../input-list/input-list";

export const StepMain = () => {
  return (
    <InputList>
      <li>
        <MainInput id="field-nickname" label="NickName" tip="Tip" />
      </li>
      <li>
        <MainInput id="field-name" label="Name" tip="Tip" />
      </li>
      <li>
        <MainInput id="field-surname" label="Surname" tip="Tip" />
      </li>
      <li>
        <MainInput id="field-sex" label="Sex" tip="Tip" type="select">
          <option id="field-sex-option-man" value="man">
            man
          </option>
          <option id="field-sex-option-woman" value="woman">
            woman
          </option>
        </MainInput>
      </li>
    </InputList>
  );
};
