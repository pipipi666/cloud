import { ReactNode } from "react";
import styles from "./form-field.module.scss";

type TProps = {
  id: string;
  label: string;
  tip?: string;
  children: ReactNode;
  errorMessage?: string;
  error?: boolean;
};

export const FormField = ({
  id,
  label,
  tip,
  children,
  error,
  errorMessage,
}: TProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={id}>{label}</label>}
      {children}
      {tip && !error && <p className={styles.tip}>{tip}</p>}
      {error && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
