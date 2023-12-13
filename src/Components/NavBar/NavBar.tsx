import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faqBusinessDetails">FaqBusinessDetails</Link>
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
