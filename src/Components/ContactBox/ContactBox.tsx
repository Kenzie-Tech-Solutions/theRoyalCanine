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
        </div>
        <p>262.273.2961</p>
      </div>
      <div className={styles.contactPiece}>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <p>theroyalcanine53105@gmail.com</p>
      </div>
      <div className={styles.contactPiece}>
        <div>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <p>Visit us on Facebook</p>
      </div>
      <div className={styles.contactPiece}>
        <div>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <p>Visit us on Instagram</p>
      </div>
    </div>
  );
};
