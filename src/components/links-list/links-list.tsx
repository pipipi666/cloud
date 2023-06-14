import styles from "./links-list.module.scss";
import { MediaLink } from "../media-link/media-link";

type TLink = {
  name: string;
  link: string;
};

type TProps = {
  links: TLink[];
};

export const LinkList = ({ links }: TProps) => {
  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link.name}>
          <MediaLink name={link.name} link={link.link} />
        </li>
      ))}
    </ul>
  );
};
