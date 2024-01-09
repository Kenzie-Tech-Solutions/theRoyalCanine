import { Link } from "react-router-dom";
import "./NavBar.css";
import { navLinksData } from "../../utils/navLinksData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useImgContext } from "../../providers/imgContext/imgContext";

library.add(faBars);

type NavBarProps = {
  pageName: string;
};

export const NavBar = ({ pageName }: NavBarProps) => {
  const { navModalOpen, navModal } = useImgContext();

  return (
    <div className={`${pageName !== "home" ? "nav-bar" : "nav-bar-home"}`}>
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
  );
};
