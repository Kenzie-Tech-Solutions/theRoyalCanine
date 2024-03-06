import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  pageName: string;
};

export const NavBarSocials = ({ pageName }: props) => {
  return (
    <div>
      <p>
        Follow Us:
        <a href="https://www.facebook.com/profile.php?id=100092557327256">
          <FontAwesomeIcon
            icon={faFacebook}
            className={`${
              pageName !== "home" ? "nav-social-icon" : "nav-social-icon-home"
            }`}
          />
        </a>
        <a href="https://www.instagram.com/theroyalcanine53105">
          <FontAwesomeIcon
            icon={faInstagram}
            className={`${
              pageName !== "home" ? "nav-social-icon" : "nav-social-icon-home"
            }`}
          />
        </a>
      </p>
    </div>
  );
};
