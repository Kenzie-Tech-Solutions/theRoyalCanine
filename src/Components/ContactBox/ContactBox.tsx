import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactBox.module.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const ContactBox = () => {
  return (
    <div className={styles.contactUsBox}>
      <div>
        <h2>Contact Us</h2>
      </div>
      <div className={styles.contactPiece}>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <hr />
        </div>
        <p>123 456 7890</p>
      </div>
      <div className={styles.contactPiece}>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <hr />
        </div>
        <p>Email Us</p>
      </div>
      <div className={styles.contactPiece}>
        <div>
          <FontAwesomeIcon icon={faFacebook} />
          <hr />
        </div>
        <p>visit us on Facebook</p>
      </div>
      <div className={styles.contactPiece}>
        <div>
          <FontAwesomeIcon icon={faInstagram} />
          <hr />
        </div>
        <p>visit us on Instagram</p>
      </div>
    </div>
  );
};
