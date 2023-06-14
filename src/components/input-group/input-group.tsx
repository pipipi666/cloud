import styles from "./input-group.module.scss";

type TItem = {
  id: string;
  name: string;
  value: string | number;
};

type TProps = {
  type: string;
  title: string;
  items: TItem[];
};

export const InputGroup = ({ type, title, items }: TProps) => {
  return (
    <>
      <p>{title}</p>
      <ul>
        {items.map((item) => (
          <li className={styles.item} key={item.id}>
            <input type={type} name={item.name} />
            <label>{item.value}</label>
          </li>
        ))}
      </ul>
    </>
  );
};
