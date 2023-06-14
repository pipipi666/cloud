import { ReactNode } from "react";
import styles from "./modal-wrapper.module.scss";

type TProps = {
  children: ReactNode;
};

export const ModalWrapper = ({ children }: TProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
