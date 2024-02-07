import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import img from "../../assets/image4.jpeg";
import styles from "./ComeVisitBox.module.css";

export const ComeVisitBox = () => {
  return (
    <div className={styles.ComeVisitBoxWrapper}>
      <div className={styles.boxContents}>
        <div className={styles.wordContent}>
          <h2>Come Visit Us</h2>
          <div className={styles.contactInfo}>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <hr />
            </div>
            <p>525 N. Pine St. Burlington, WI 53105</p>
          </div>
          <div className={styles.contactInfo}>
            <div>
              <FontAwesomeIcon icon={faClock} />
              <hr />
            </div>
            <p>8 am - 8 pm, 7 days a week</p>
          </div>
          <div className={styles.contactInfo}>
            <p>
              *Hours subject to change. Please follow us on social media for any
              updates.
            </p>
          </div>
        </div>
        {/* <div className={styles.imgContainer}>
          <img src={img} alt="treat Container" />
        </div> */}
      </div>
    </div>
  );
};

//     padding: 20px;
// display: flex;
// align-items: center;
// font-size: 20px;
