import styles from "./media-link.module.scss";
import { IconFolder } from "../../icons/folder";

type TProps = {
  name: string;
  link: string;
};

export const MediaLink = ({ name, link }: TProps) => {
  return (
    <div className={styles.media}>
      <div className={styles.icon}>
        <IconFolder />
      </div>
      <a
        className={styles.link}
        href={link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {name}
      </a>
    </div>
  );
};
