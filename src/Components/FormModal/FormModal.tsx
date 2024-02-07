import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./FormModal.module.css";


export const FormModal = () => {
    const [openModal, modalClose] = useState(false);


  const handleWrapperClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && modalClose) {
        modalClose(false);
    }
  };

  return (
    <div
      className={`${styles.modalWrapper} ${!openModal ? null : styles.isVisible}`}
      onClick={handleWrapperClick}
    >
        <div data-animation="slideInOutTop">
          <div className={`${!openModal ? null : styles.isVisible} ${styles.modalDialog}`}>
            <div className={styles.btnDiv}>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => modalClose(false)}
                className={styles.faTimes}
              />
            </div>
            <div className={styles.contactInfo}>
            <h2>CONTACT INFO</h2>
            <div>
              <form action="link-to-get-form.io">
                <input type="text" placeholder="name"></input>
                <input type="email" placeholder="email"></input>
                <input type="tel" placeholder="phone"></input>
                <textarea placeholder="message" cols={10} rows={5}></textarea>
                <input
                  className={styles.submitBtn}
                  type="submit"
                  value="submit"
                ></input>
              </form>
            </div>
          </div>
          <div />
        </div>
          </div>
        </div>
    // </div>
  );
};