import { Link } from "react-router-dom";
import "./NavBar.css";
import { navLinksData } from "../../utils/navLinksData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useImgContext } from "../../providers/imgContext/imgContext";
import { NavBarSocials } from "../NavBarSocials/NavBarSocials";
import { NavBarEmailDesktop } from "../NavBarEmailDesktop/NavBarEmailDesktop";
import { NavBarPhoneDesktop } from "../NavBarPhoneDesktop/NavBarPhoneDesktop";
import { NavBarContactsMobile } from "../NavBarContactsMobile/NavBarContactsMobile";

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
            <NavBarSocials pageName={pageName} />
            <NavBarEmailDesktop pageName={pageName} />
            <NavBarPhoneDesktop pageName={pageName} />
            <NavBarContactsMobile pageName={pageName} />
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
