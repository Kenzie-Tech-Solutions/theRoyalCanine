import { Link } from "react-router-dom";
import "./NavBar.css";

type NavBarProps = {
  pageName: string;
};

export const NavBar = ({ pageName }: NavBarProps) => {
  return (
    <div className={`${pageName !== "home" ? "nav-bar" : "nav-bar-home"}`}>
      <nav>
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faqBusinessDetails">Business Details & FAQ</Link>
          </li>
          <li>
            <Link to="/photoGallery">PhotoGallery</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
