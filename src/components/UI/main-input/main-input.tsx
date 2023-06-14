import styles from "./main-input.module.scss";

type TProps = {
  type?: "text" | "textarea";
  placeholder?: string;
  label?: string;
  tip?: string;
  disabled?: boolean;
};

export const MainInput = ({
  type = "text",
  placeholder = "Placeholder",
  label,
  tip,
  disabled = false,
}: TProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}
      {type === "textarea" ? (
        <textarea
          className={styles.textarea}
          placeholder={placeholder}
          rows={3}
          disabled={disabled}
        />
      ) : (
        <input
          className={styles.input}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
      {tip && <p className={styles.tip}>{tip}</p>}
    </div>
  );
};
