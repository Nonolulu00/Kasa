import RedLogo from "../../Assets/images/RedLogo.svg";
import "../../styles/typography.scss";
import "../Header/Header.scss";

export const Header = () => {
  return (
    <header>
      <img src={RedLogo} />
      <nav>
        <a href="/">Accueil</a>
        <a href="#">A propos</a>
      </nav>
    </header>
  );
};
