import styles from "./main-input.module.scss";

type TProps = {
  type?: "text" | "textarea" | "select";
  placeholder?: string;
  label?: string;
  tip?: string;
  disabled?: boolean;
};

export const MainInput = ({
  type,
  placeholder = "Placeholder",
  label,
  tip,
  disabled = false,
}: TProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}
      {type === "select" ? (
        <select className={styles.select} defaultValue="default">
          <option value="default" disabled>
            Не выбрано
          </option>
          <option>man</option>
          <option>woman</option>
        </select>
      ) : type === "textarea" ? (
        <textarea
          className={styles.textarea}
          placeholder={placeholder}
          rows={3}
          disabled={disabled}
        />
      ) : (
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
      {tip && <p className={styles.tip}>{tip}</p>}
    </div>
  );
};
