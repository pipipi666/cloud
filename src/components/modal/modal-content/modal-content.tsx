import { useNavigate } from "react-router";
import { ModalWrapper, MainButton, IconCheck, IconCross } from "components";
import styles from "./modal-content.module.scss";
import { ROUTES } from "utils";

type TProps = {
  isSuccess?: boolean;
};

export const ModalContent = ({ isSuccess = false }: TProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <ModalWrapper>
      {isSuccess ? (
        <h2 className={styles.title}>Форма успешно отправлена</h2>
      ) : (
        <div className={styles.title_wrapper}>
          <h2 className={styles.title}>Ошибка</h2>
          <button className={styles.close} onClick={handleClick}>
            <IconCross type="close" />
          </button>
        </div>
      )}
      <div className={styles.img_wrapper}>
        <div className={isSuccess ? styles.success : styles.error}>
          {isSuccess ? (
            <IconCheck color="#05ae71" />
          ) : (
            <IconCross type="error" />
          )}
        </div>
      </div>
      {isSuccess ? (
        <MainButton id="button-to-main" onClick={handleClick}>
          На главную
        </MainButton>
      ) : (
        <div className={styles.close_accent}>
          <MainButton id="button-close" onClick={handleClick}>
            Закрыть
          </MainButton>
        </div>
      )}
    </ModalWrapper>
  );
};
