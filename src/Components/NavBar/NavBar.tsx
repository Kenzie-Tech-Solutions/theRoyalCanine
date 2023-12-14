import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="nav-bar">
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
