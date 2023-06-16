import { ReactNode } from "react";
import styles from "./form-field.module.scss";

type TProps = {
  id: string;
  label: string;
  tip?: string;
  children: ReactNode;
};

export const FormField = ({ id, label, tip, children }: TProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={id}>{label}</label>}
      {children}
      {tip && <p className={styles.tip}>{tip}</p>}
    </div>
  );
};
