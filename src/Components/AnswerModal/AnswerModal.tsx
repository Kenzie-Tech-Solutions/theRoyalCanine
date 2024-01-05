import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AnswerModal.module.css";
import { useImgContext } from "../../providers/imgContext/imgContext";

export const AnswerModal = () => {
  const { faqModalData, answerModal, answerModalClose } = useImgContext();

  const handleWrapperClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget && answerModalClose) {
      answerModalClose();
    }
  };
  return (
    <div
      className={`${styles.modalWrapper} ${
        !answerModal ? "" : styles.isVisible
      }`}
      onClick={handleWrapperClick}
    >
      {faqModalData?.map((item) => (
        <div data-animation="slideInOutTop" key={item.id}>
          <div
            className={`${!answerModal ? "" : styles.isVisible} ${
              styles.modalDialog
            }`}
          >
            <div className={styles.btnDiv}>
              <FontAwesomeIcon
                icon={faTimes}
                className={styles.closeIcon}
                onClick={answerModalClose}
              />
            </div>
            <div className={styles.modalContents}>
              <ul>
                {item.answer.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
