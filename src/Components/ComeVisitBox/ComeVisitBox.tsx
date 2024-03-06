import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import img from "../../assets/image4.jpeg";
import styles from "./ComeVisitBox.module.css";

export const ComeVisitBox = () => {
  return (
    <div className={styles.ComeVisitBoxWrapper}>
      <div className={styles.boxContents}>
        <div className={styles.wordContent}>
          <h2>Visit Us</h2>
          <div className={styles.contactInfo}>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p>525 N. Pine St. Burlington, WI 53105</p>
          </div>
          <div className={styles.clockIcon}>
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <p>8 am - 8 pm, 7 days a week</p>
          </div>
          <div className={`${styles.contactInfo} ${styles.socialsBlurb}`}>
            <p>
              Please follow us on social media for any closures or changes to
              our hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
