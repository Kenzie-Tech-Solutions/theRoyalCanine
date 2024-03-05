import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBarPhoneDesktop.module.css";

type props = {
  pageName: string;
};

export const NavBarPhoneDesktop = ({ pageName }: props) => {
  return (
    <div className={styles.phoneWrapper}>
      <p>
        Call Us:
        <a href="tel:1262.273.2961">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className={`${
              pageName !== "home" ? "nav-social-icon" : "nav-social-icon-home"
            }`}
          />
        </a>
      </p>
    </div>
  );
};
