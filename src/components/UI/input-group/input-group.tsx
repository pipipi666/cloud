import { ChangeEvent } from "react";
import styles from "./input-group.module.scss";

type TItem = {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
};

type TProps = {
  type: string;
  title: string;
  items: TItem[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputGroup = ({ type, title, items, onChange }: TProps) => {
  return (
    <>
      <p>{title}</p>
      <ul>
        {items.map((item) => (
          <li className={styles.item} key={item.id}>
            <input
              type={type}
              name={item.name}
              value={item.value}
              onChange={onChange}
              checked={item.checked}
            />
            <label>{item.value}</label>
          </li>
        ))}
      </ul>
    </>
  );
};
