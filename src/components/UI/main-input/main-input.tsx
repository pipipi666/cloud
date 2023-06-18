import { ChangeEvent } from "react";
import styles from "./main-input.module.scss";

type TProps = {
  id: string;
  type?: string;
  name: string;
  placeholder?: string;
  isLarge?: boolean;
  value?: string;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  disabled?: boolean;
};

export const MainInput = ({
  id,
  name,
  placeholder = "Placeholder",
  value,
  type = "text",
  onInput,
  error,
  isLarge = false,
  disabled = false,
}: TProps) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      className={
        error
          ? isLarge
            ? styles.input_large_error
            : styles.error
          : isLarge
          ? styles.input_large
          : styles.input
      }
      placeholder={placeholder}
      value={value}
      onInput={onInput}
      disabled={disabled}
    />
  );
};
