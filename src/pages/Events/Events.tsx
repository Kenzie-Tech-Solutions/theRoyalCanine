import { MenuModal } from "../../Components/MenuModal/menuModal";
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
    </div>
  );
};
