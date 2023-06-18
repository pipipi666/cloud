import { LinkList } from "components/links-list/links-list";
import styles from "./user-info.module.scss";
import { useAppSelector } from "utils";

export const UserInfo = () => {
  const { name, surname } = useAppSelector((state) => state.user.info);
  const fullName = `${name.slice(0, 1)}${surname.slice(0, 1)}`.toUpperCase();

  return (
    <div className={styles.info}>
      <div className={styles.avatar}>{fullName}</div>
      <div className={styles.links}>
        <h2 className={styles.name}>
          {name} {surname}
        </h2>
        <LinkList />
      </div>
    </div>
  );
};
