import { NavLink } from "react-router-dom";
import RedLogo from "../../Assets/images/RedLogo.svg";
import "../../styles/typography.scss";
import "../Header/Header.scss";

export const Header = () => {
  return (
    <header>
      <img src={RedLogo} />
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "activeLink" : "link")}
        >
          Accueil
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "activeLink" : "link")}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
};
