import { useImgContext } from "../providers/imgContext/imgContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./galleryImgModal.module.css";

export const GalleryImgModal = () => {
  const { modalData, openModal, modalClose } = useImgContext();
  return (
    <div
      className={`${styles.modalWrapper} ${!openModal ? "" : styles.isVisible}`}
      onClick={modalClose}
    >
      {modalData.map((item) => (
        <div data-animation="slideInOutTop" key={item.id}>
          <div
            className={`${!openModal ? "" : styles.isVisible} ${
              styles.modalDialog
            }`}
          >
            <div className={styles.btnDiv}>
              <FontAwesomeIcon
                icon={faTimes}
                className={styles.closeIcon}
                onClick={modalClose}
              />
            </div>
            <div className={styles.modalContents}>
              <img src={item.src} alt={item.alt} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
