import { Footer } from "../../Components/Footer/Footer";
import { MenuModal } from "../../Components/MenuModal/MenuModal";
import { NavBar } from "../../Components/NavBar/NavBar";
import { eventDetails } from "../../utils/eventDetails";
import {
  faClock,
  faLocationDot,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Events.module.css";

export const Events = () => {
  return (
    <div className={styles.pageContainer}>
      <NavBar pageName="" />
      <div className={styles.content}>
        <div className={styles.heroSection}>
          <h1>Events</h1>
        </div>
        <div className={styles.eventsSection}>
          {eventDetails.map((event) => {
            return (
              <div
                key={event.date}
                className={styles.eventCard}
                style={{ backgroundColor: event.color }}
              >
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.details}</p>
                  <div className={styles.flexRow}>
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <p>{event.location}</p>
                  </div>
                  <div className={styles.flexRow}>
                    <div>
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                    <p>{event.date}</p>
                  </div>
                  <div className={`${styles.flexRow} ${styles.lastDiv}`}>
                    <div>
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <p>{event.time}</p>
                  </div>
                </div>
                <a href={event.link} target="_blank">Event Link </a>
              </div>
            );
          })}
        </div>
      </div>
      <MenuModal pageName="" />
      <Footer />
    </div>
  );
};
