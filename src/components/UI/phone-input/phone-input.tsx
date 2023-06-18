import { ChangeEvent } from "react";
import styles from "./phone-input.module.scss";
/* @ts-ignore */
import MaskedInput from "react-text-mask";

type TProps = {
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
};

export const PhoneInput = ({
  id,
  name,
  value,
  onChange,
  placeholder = "Enter a phone number",
  disabled = false,
}: TProps) => {
  return (
    <MaskedInput
      mask={[
        "+",
        "7",
        " ",
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
      ]}
      className={styles.input}
      placeholder={placeholder}
      guide={false}
      id={id}
      onChange={onChange}
      disabled={disabled}
      value={value}
      name={name}
    />
  );
};
