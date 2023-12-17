import { Link } from "react-router-dom";
import "./NavBar.css";
import { navLinksData } from "../../utils/navLinksData";

type NavBarProps = {
  pageName: string;
};

export const NavBar = ({ pageName }: NavBarProps) => {
  return (
    <div className={`${pageName !== "home" ? "nav-bar" : "nav-bar-home"}`}>
      <nav>
        <ul className="flex">
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
