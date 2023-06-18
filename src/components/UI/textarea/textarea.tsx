import { ChangeEvent } from "react";
import styles from "./textarea.module.scss";

type TProps = {
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  disabled?: boolean;
  error: boolean;
};

export const Textarea = ({
  id,
  name,
  placeholder = "Placeholder",
  value,
  onChange,
  rows = 3,
  error,
  disabled,
}: TProps) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        className={error ? styles.error : styles.textarea}
        name={name}
        placeholder={placeholder}
        rows={rows}
        id={id}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      <div className={styles.counter}>{value.trim().length}</div>
    </div>
  );
};
