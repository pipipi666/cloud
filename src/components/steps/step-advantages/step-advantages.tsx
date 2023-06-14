import styles from "./step-advantages.module.scss";
import { MainInput } from "../../UI/main-input/main-input";
import { InputList } from "../../input-list/input-list";
import { IconTrash } from "../../icons/trash";
import { MainButton } from "../../UI/main-button/main-button";
import { IconPlus } from "../../icons/plus";
import { InputGroup } from "../../input-group/input-group";

export const StepAdvantages = () => {
  const checkboxes = [
    { id: "field-checkbox-group-option-1", value: 1, name: "1" },
    { id: "field-checkbox-group-option-2", value: 2, name: "2" },
    { id: "field-checkbox-group-option-1", value: 3, name: "3" },
  ];
  const radio = [
    { id: "field-radio-group-option-1", value: 1, name: "1" },
    { id: "field-radio-group-option-2", value: 2, name: "2" },
    { id: "field-radio-group-option-1", value: 3, name: "3" },
  ];
  const handleAddClick = () => {};
  const handleDeleteClick = () => {};

  return (
    <InputList>
      <li>
        <p>Advantages</p>
        <ul className={styles.advantages_list}>
          <li className={styles.advantages}>
            <MainInput />
            <button
              className={styles.trash}
              onClick={handleDeleteClick}
              type="button"
            >
              <IconTrash />
            </button>
          </li>
        </ul>
        <MainButton onClick={handleAddClick} type="square">
          <IconPlus />
        </MainButton>
      </li>
      <li>
        <InputGroup type="checkbox" title="Checkbox group" items={checkboxes} />
      </li>
      <li>
        <InputGroup type="radio" title="Radio group" items={radio} />
      </li>
    </InputList>
  );
};
