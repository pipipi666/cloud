import { ChangeEvent } from "react";
import styles from "./textarea.module.scss";
import { Field, Formik } from "formik";

type TProps = {
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  disabled?: boolean;
};

export const Textarea = ({
  id,
  name,
  placeholder = "Placeholder",
  value,
  onChange,
  rows = 3,
  disabled,
}: TProps) => {
  const initialValues = {};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <textarea
        className={styles.textarea}
        name={name}
        placeholder={placeholder}
        rows={rows}
        id={id}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </Formik>
  );
};
