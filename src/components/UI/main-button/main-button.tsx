import styles from "./main-button.module.scss";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  type?: "filled" | "outline" | "square";
  isSquare?: boolean;
};

export const MainButton = ({ children, type = "filled" }: TProps) => {
  const containerClassName = styles[type];
  return <button className={containerClassName}>{children}</button>;
};
