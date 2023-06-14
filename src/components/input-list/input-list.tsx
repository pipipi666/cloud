import { ReactNode } from "react";
import styles from "./input-list.module.scss";

type TProps = {
  children: ReactNode;
};

export const InputList = ({ children }: TProps) => {
  return <ul className={styles.list}>{children}</ul>;
};
