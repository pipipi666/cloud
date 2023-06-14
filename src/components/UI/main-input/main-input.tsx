import { ReactNode } from "react";
import styles from "./main-input.module.scss";

type TProps = {
  id: string;
  type?: "text" | "textarea" | "select";
  placeholder?: string;
  label?: string;
  tip?: string;
  isLarge?: boolean;
  children?: ReactNode;
  disabled?: boolean;
};

export const MainInput = ({
  id,
  type,
  placeholder = "Placeholder",
  label,
  tip,
  children,
  isLarge = false,
  disabled = false,
}: TProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}
      {type === "select" ? (
        <div className={styles.select_wrapper}>
          <select className={styles.select} defaultValue="default" id={id}>
            <option value="default" disabled>
              Не выбрано
            </option>
            {children}
          </select>
        </div>
      ) : type === "textarea" ? (
        <textarea
          className={styles.textarea}
          placeholder={placeholder}
          rows={3}
          id={id}
          disabled={disabled}
        />
      ) : (
        <input
          type="text"
          className={isLarge ? styles.input_large : styles.input}
          placeholder={placeholder}
          id={id}
          disabled={disabled}
        />
      )}
      {tip && <p className={styles.tip}>{tip}</p>}
    </div>
  );
};
