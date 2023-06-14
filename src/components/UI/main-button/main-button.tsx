import styles from "./main-button.module.scss";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  type?: "filled" | "outline" | "square";
  onClick: () => void;
};

export const MainButton = ({ children, type = "filled", onClick }: TProps) => {
  return (
    <button className={styles[type]} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
