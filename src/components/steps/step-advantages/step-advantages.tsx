import styles from "./step-advantages.module.scss";
import { ChangeEvent, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { INPUTS_CHECKBOX, INPUTS_RADIO, useAppSelector } from "utils";
import {
  advantagesFormSet,
  checkboxesFormSet,
  mainFormSet,
} from "services/slices/formSlice";
import {
  MainInput,
  InputList,
  IconTrash,
  MainButton,
  IconPlus,
  InputGroup,
} from "components";

export const StepAdvantages = () => {
  const dispatch = useDispatch();
  const { advantages, checks } = useAppSelector((state) => state.form);
  const radioSelected = useAppSelector((state) => state.form.formMain.radio);
  const { errors } = useAppSelector((state) => state.form);

  const checkboxes = useMemo(
    () =>
      INPUTS_CHECKBOX.map((x) => ({
        ...x,
        checked: checks.includes(x.name),
      })),
    [checks]
  );

  const radios = useMemo(
    () =>
      INPUTS_RADIO.map((x) => ({
        ...x,
        checked: radioSelected === x.value,
      })),
    [radioSelected]
  );

  const handleAddClick = useCallback(() => {
    dispatch(advantagesFormSet([...advantages, ""]));
  }, [advantages, dispatch]);

  const handleDeleteClick = useCallback(
    (index: number) => {
      dispatch(advantagesFormSet(advantages.filter((_, ind) => ind !== index)));
    },
    [advantages, dispatch]
  );

  const onAdvChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const index = Number(e.target.name.slice(-1));
      const arr = [...advantages];
      arr[index - 1] = e.target.value;
      dispatch(advantagesFormSet(arr));
    },
    [advantages, dispatch]
  );

  const onCheckboxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        checkboxesFormSet(
          e.target.checked
            ? [...checks, e.target.name]
            : [...checks.filter((x) => x !== e.target.name)]
        )
      );
    },
    [checks, dispatch]
  );

  const onRadioChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(mainFormSet({ name: e.target.name, value: e.target.value }));
    },
    [dispatch]
  );

  return (
    <InputList>
      <li>
        <p>Advantages</p>
        <ul className={styles.advantages_list}>
          {advantages.map((item, index) => {
            const name = `advantages-${index + 1}`;
            const id = `field-advantages-${index + 1}`;
            return (
              <li className={styles.advantages} key={id}>
                <MainInput
                  id={id}
                  name={name}
                  onInput={onAdvChange}
                  value={item}
                  placeholder="Advantage"
                  error={errors.advantages}
                />
                <button
                  className={styles.trash}
                  onClick={() => handleDeleteClick(index)}
                  id={`button-remove-${index + 1}`}
                  type="button"
                >
                  <IconTrash />
                </button>
              </li>
            );
          })}
        </ul>
        <MainButton id="button-add" onClick={handleAddClick} type="square">
          <IconPlus />
        </MainButton>
      </li>
      <li>
        <InputGroup
          type="checkbox"
          title="Checkbox group"
          items={checkboxes}
          role="CheckboxGroup"
          onChange={onCheckboxChange}
        />
      </li>
      <li>
        <InputGroup
          type="radio"
          title="Radio group"
          items={radios}
          role="RadioGroup"
          onChange={onRadioChange}
        />
      </li>
    </InputList>
  );
};
