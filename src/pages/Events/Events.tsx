import { Footer } from "../../Components/Footer/Footer";
import { MenuModal } from "../../Components/MenuModal/MenuModal";
import { NavBar } from "../../Components/NavBar/NavBar";
import styles from "./Events.module.css";

export const Events = () => {
  return (
    <div>
      <div className={styles.heroSection}>
        <NavBar pageName="" />
        <h1>Events</h1>
      </div>
      <MenuModal pageName="" />
      <Footer />
    </div>
  );
};
