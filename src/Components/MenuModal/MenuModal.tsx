import { useNavigate } from "react-router-dom";
import { navLinksData } from "../../utils/navLinksData";
import "./MenuModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useImgContext } from "../../providers/imgContext/imgContext";

library.add(faX);

export const MenuModal = ({ pageName }: { pageName: string }) => {
  const { navModalClose, navModal } = useImgContext();

  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    if (navModalClose) {
      navModalClose();
    }
    console.log(path);
    navigate(path);
  };
  return (
    <div className={`nav-modal ${navModal ? "open" : ""}`}>
      <ul className="display-modal">
        {navLinksData.map((link) => (
          <li
            className={`${pageName !== "home" ? "nav-link" : "nav-link-home"}`}
            key={link.label}
          >
            <a onClick={() => handleLinkClick(link.to)}>{link.label}</a>
            {/* <Link to={link.to}>{link.label}</Link> */}
          </li>
        ))}
      </ul>
      <FontAwesomeIcon
        icon={["fas", "x"]}
        className="exit"
        onClick={navModalClose}
      />
    </div>
  );
};
