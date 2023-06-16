import { STEPS_COUNT } from "utils/consts";
import { IconCheck } from "../icons/check";
import styles from "./stepper.module.scss";

type TProps = {
  step: number;
};

export const Stepper = ({ step }: TProps) => {
  return (
    <div className={styles.stepper}>
      <div className={styles.line}>
        {step > 0 && <div className={styles.left}></div>}
        {step > 1 && <div className={styles.right}></div>}
      </div>
      <ul className={styles.steps}>
        {[...Array(STEPS_COUNT)].map((s, index) => (
          <li
            className={step >= index ? styles.active : styles.step}
            key={index}
          >
            {step > index ? (
              <IconCheck color="#5558fa" width={16} height={16} />
            ) : (
              <div className={styles.point}></div>
            )}
            <div>{index + 1}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
