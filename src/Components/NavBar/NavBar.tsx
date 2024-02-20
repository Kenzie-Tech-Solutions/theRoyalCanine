import { Link } from "react-router-dom";
import "./NavBar.css";
import { navLinksData } from "../../utils/navLinksData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useImgContext } from "../../providers/imgContext/imgContext";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";

library.add(faBars);

type NavBarProps = {
  pageName: string;
};

export const NavBar = ({ pageName }: NavBarProps) => {
  const { navModalOpen, navModal } = useImgContext();

  return (
    <section className="nav-section">
      <div
        className={`${
          pageName !== "home" ? "nav-container" : "nav-container-home"
        }`}
      >
        <div className={`${pageName !== "home" ? "nav-bar" : "nav-bar-home"}`}>
          <div
            className={`${
              pageName !== "home" ? "nav-socials" : "nav-socials-home"
            }`}
          >
            <div>
              <p>
                <a href="https://www.facebook.com/profile.php?id=100092557327256">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={`${
                      pageName !== "home"
                        ? "nav-social-icon"
                        : "nav-social-icon-home"
                    }`}
                  />
                </a>
                <a href="https://www.instagram.com/theroyalcanine53105">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={`${
                      pageName !== "home"
                        ? "nav-social-icon"
                        : "nav-social-icon-home"
                    }`}
                  />
                </a>
                Follow Us:
              </p>
            </div>
            <div>
              <p>
                Contact Us:
                <HashLink
                  smooth
                  to={`${
                    pageName !== "home" ? "/#contactInfo" : "#contactInfo"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={`${
                      pageName !== "home"
                        ? "nav-social-icon"
                        : "nav-social-icon-home"
                    }`}
                  />
                </HashLink>
              </p>
            </div>
          </div>
          <nav className="nav-tag">
            <div className="hamburger-div">
              <FontAwesomeIcon
                icon={["fas", "bars"]}
                className={`hamburger-menu ${navModal === true ? "hide" : ""} ${
                  pageName === "home" ? "home-hamburger" : ""
                }`}
                onClick={navModalOpen}
              />
            </div>
            <ul className="flex hide-menu">
              {navLinksData.map((link) => (
                <li
                  className={`${
                    pageName !== "home" ? "nav-link" : "nav-link-home"
                  }`}
                  key={link.label}
                >
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
