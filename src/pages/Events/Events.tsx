import { Footer } from "../../Components/Footer/Footer";
import { MenuModal } from "../../Components/MenuModal/MenuModal";
import { NavBar } from "../../Components/NavBar/NavBar";
import { eventDetails } from "../../utils/eventDetails";
import styles from "./Events.module.css";

export const Events = () => {
  return (
    <div>
      <NavBar pageName="" />
      <div className={styles.heroSection}>
        <h1>Events</h1>
      </div>
      <div className={styles.eventsSection}>
        {eventDetails.map((event) => {
          return (
            <div key={event.date} className={styles.eventCard}>
              <p>Date: {event.date}</p>
              <h3>{event.title}</h3>
              <p>{event.details}</p>
            </div>
          );
        })}
      </div>
      <MenuModal pageName="" />
      <Footer />
    </div>
  );
};
