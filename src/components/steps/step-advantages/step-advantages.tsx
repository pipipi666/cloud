import styles from "./step-advantages.module.scss";
import { ChangeEvent, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  advantagesFormSet,
  checkboxesFormSet,
  mainFormSet,
} from "services/slices/formSlice";
import { INPUTS_CHECKBOX, INPUTS_RADIO, useAppSelector } from "utils";
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
  const advantages = useAppSelector((state) => state.formAdvantages);
  const checkSelected = useAppSelector((state) => state.formCheckboxes);
  const radioSelected = useAppSelector((state) => state.formMain.radio);

  const checkboxes = useMemo(
    () =>
      INPUTS_CHECKBOX.map((x) => ({
        ...x,
        checked: checkSelected.includes(x.name),
      })),
    [checkSelected]
  );

  const radios = useMemo(
    () =>
      INPUTS_RADIO.map((x) => ({
        ...x,
        checked: radioSelected === x.value,
      })),
    [radioSelected]
  );

  const handleAddClick = () => {
    dispatch(advantagesFormSet([...advantages, ""]));
  };

  const handleDeleteClick = useCallback(
    (index: number) => {
      dispatch(advantagesFormSet(advantages.filter((x, ind) => ind !== index)));
    },
    [advantages]
  );

  const onAdvChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const index = Number(e.target.name.slice(-1));
      const arr = [...advantages];
      arr[index - 1] = e.target.value;
      dispatch(advantagesFormSet(arr));
    },
    [advantages]
  );

  const onCheckboxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        checkboxesFormSet(
          e.target.checked
            ? [...checkSelected, e.target.name]
            : [...checkSelected.filter((x) => x !== e.target.name)]
        )
      );
    },
    [checkSelected]
  );

  const onRadioChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(mainFormSet({ name: e.target.name, value: e.target.value }));
  }, []);

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
                  onChange={onAdvChange}
                  value={item}
                />
                <button
                  className={styles.trash}
                  onClick={() => handleDeleteClick(index)}
                  id="button-remove-1"
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
          onChange={onCheckboxChange}
        />
      </li>
      <li>
        <InputGroup
          type="radio"
          title="Radio group"
          items={radios}
          onChange={onRadioChange}
        />
      </li>
    </InputList>
  );
};
