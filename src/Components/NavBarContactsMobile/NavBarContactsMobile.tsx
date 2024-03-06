import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBarContactsMobile.module.css";

type props = {
  pageName: string;
};
// sw
export const NavBarContactsMobile = ({ pageName }: props) => {
  return (
    <div className={styles.contactWrapper}>
      <p>
        Email Us:
        <a href="mailto:theroyalcanine53105@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`${
              pageName !== "home" ? "nav-social-icon" : "nav-social-icon-home"
            }`}
          />
        </a>{" "}
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
