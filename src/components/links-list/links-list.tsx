import styles from "./links-list.module.scss";
import { MediaLink } from "../UI/media-link/media-link";
import { useAppSelector } from "utils";

export const LinkList = () => {
  const { media } = useAppSelector((state) => state.user);

  return (
    <ul className={styles.list}>
      {media.map((link) => (
        <li key={link.name}>
          <MediaLink name={link.name} link={link.url} />
        </li>
      ))}
    </ul>
  );
};
