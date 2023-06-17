import { ChangeEvent } from "react";
import styles from "./main-input.module.scss";
import { Field, Formik } from "formik";

type TProps = {
  id: string;
  type?: string;
  name: string;
  placeholder?: string;
  isLarge?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export const MainInput = ({
  id,
  name,
  placeholder = "Placeholder",
  value,
  type = "text",
  onChange,
  isLarge = false,
  disabled = false,
}: TProps) => {
  const initialValues = {
    nickname: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Field
        type={type}
        name={name}
        className={isLarge ? styles.input_large : styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        disabled={disabled}
      />
    </Formik>
  );
};
