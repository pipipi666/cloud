import styles from "./container.module.scss";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  type?: "default" | "form";
};

export const Container = ({ children, type = "default" }: TProps) => {
  const containerClassName =
    type === "form" ? styles.container_form : styles.container_default;
  return <div className={containerClassName}>{children}</div>;
};
