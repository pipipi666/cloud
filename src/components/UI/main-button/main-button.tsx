import styles from "./main-button.module.scss";
import { ReactNode } from "react";

type TProps = {
  id: string;
  children: ReactNode;
  type?: "filled" | "outline" | "square";
  btnType?: "button" | "submit";
  onClick?: (e: MouseEvent) => void;
};

export const MainButton = ({
  children,
  btnType = "button",
  type = "filled",
  onClick,
  id,
}: TProps) => {
  return (
    <button
      className={styles[type]}
      id={id}
      type={btnType}
      onClick={() => onClick}
    >
      {children}
    </button>
  );
};
