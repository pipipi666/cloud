import styles from "./step-advantages.module.scss";
import { MainInput } from "../../UI/main-input/main-input";
import { InputList } from "../../input-list/input-list";
import { IconTrash } from "../../icons/trash";
import { MainButton } from "../../UI/main-button/main-button";
import { IconPlus } from "../../icons/plus";
import { InputGroup } from "../../input-group/input-group";
import { useState } from "react";

export const StepAdvantages = () => {
  const checkboxes = [
    { id: "field-checkbox-group-option-1", value: 1, name: "1" },
    { id: "field-checkbox-group-option-2", value: 2, name: "2" },
    { id: "field-checkbox-group-option-3", value: 3, name: "3" },
  ];
  const radio = [
    { id: "field-radio-group-option-1", value: 1, name: "1" },
    { id: "field-radio-group-option-2", value: 2, name: "2" },
    { id: "field-radio-group-option-3", value: 3, name: "3" },
  ];
  const advantagesValues = [
    { id: "field-advantages-1", value: 1, name: "1" },
    { id: "field-advantages-2", value: 2, name: "2" },
    { id: "field-advantages-3", value: 3, name: "3" },
  ];
  const [advantages, setAdvantages] = useState(advantagesValues);

  const handleAddClick = () => {
    setAdvantages([
      ...advantages,
      {
        id: `field-advantages-${advantages[advantages.length - 1].id + 1}`,
        value: 1,
        name: "1",
      },
    ]);
  };

  const handleDeleteClick = (id: string) => {
    setAdvantages(advantages.filter((item) => item.id !== id));
  };

  return (
    <InputList>
      <li>
        <p>Advantages</p>
        <ul className={styles.advantages_list}>
          {advantages.map((item) => (
            <li className={styles.advantages} key={item.id}>
              <MainInput id={item.id} />
              <button
                className={styles.trash}
                onClick={() => handleDeleteClick(item.id)}
                id="button-remove-1"
                type="button"
              >
                <IconTrash />
              </button>
            </li>
          ))}
        </ul>
        <MainButton id="button-add" onClick={handleAddClick} type="square">
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
