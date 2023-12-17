import { useImgContext } from "../providers/imgContext/imgContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./galleryImgModal.module.css";

export const GalleryImgModal = () => {
  const { modalData, openModal, modalClose } = useImgContext();
  return (
    <div
      className={`${styles.modalWrapper} ${!openModal ? "" : styles.isVisible}`}
    >
      {modalData.map((item) => (
        <div data-animation="slideInOutTop" key={item.id}>
          <div
            className={`${!openModal ? "" : styles.isVisible} ${
              styles.modalDialog
            }`}
          >
            <div className="btnDiv">
              <FontAwesomeIcon
                icon={faTimes}
                className={styles.closeIcon}
                onClick={modalClose}
              />
            </div>
            <img src={item.src} alt={item.alt} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
