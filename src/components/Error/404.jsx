import "../../styles/typography.scss";
import "./404.scss";
// import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";

export const ErrorPage = () => {
  return (
    <Layout>
      <div className="error-container">
        <h1>404</h1>
        <h2>Oups... Cette page n'existe pas</h2>
        <NavLink to={"/"}>Retourner à la page d'accueil</NavLink>
      </div>
    </Layout>
  );
};
