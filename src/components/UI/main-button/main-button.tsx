import styles from "./main-button.module.scss";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  type?: "filled" | "outline" | "square";
};

export const MainButton = ({ children, type = "filled" }: TProps) => {
  return <button className={styles[type]}>{children}</button>;
};
