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
      <div className="nav-container">
        <div className={`${pageName !== "home" ? "nav-bar" : "nav-bar-home"}`}>
          <div className="nav-socials">
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="nav-social-icon"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="nav-social-icon"
                />
                Follow us!
              </p>
            </div>
            <div>
              <p>
                Contact us:
                <HashLink smooth to="#contactInfo">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="nav-social-icon"
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
