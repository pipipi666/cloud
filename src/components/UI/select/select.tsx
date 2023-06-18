import { ChangeEvent, ReactNode } from "react";
import styles from "./select.module.scss";
import { Field, Formik } from "formik";

type TProps = {
  id: string;
  name: string;
  children: ReactNode;
  value?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  error: boolean;
};

export const Select = ({
  id,
  name,
  children,
  value,
  onChange,
  error,
}: TProps) => {
  const initialValues = {};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div className={error ? styles.error : styles.select_wrapper}>
        <select
          className={styles.select}
          onChange={onChange}
          value={value}
          name={name}
          id={id}
        >
          <option value="default" disabled>
            Не выбрано
          </option>
          {children}
        </select>
      </div>
    </Formik>
  );
};
