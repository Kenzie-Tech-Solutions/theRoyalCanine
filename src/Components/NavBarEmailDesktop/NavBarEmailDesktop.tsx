import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavBarEmailDesktop.module.css";

type props = {
  pageName: string;
};
// sw
export const NavBarEmailDesktop = ({ pageName }: props) => {
  return (
    <div className={styles.emailWrapper}>
      <p>
        Email Us:
        <a href="mailto:theroyalcanine53105@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`${
              pageName !== "home" ? "nav-social-icon" : "nav-social-icon-home"
            }`}
          />
        </a>
      </p>
    </div>
  );
};
