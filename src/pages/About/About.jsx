import { Banner } from "../../components/Banner/Banner";
import { Layout } from "../../components/Layout/Layout";
import Landscape from "../../Assets/images/Landscape2.png";
import { Collapse } from "../../components/Collapse/Collapse";
import "./About.scss";

const reliability =
  " Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logement, et toutes les informations sont régulièrement vérifiées par nos équipes.";
const respect =
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const service =
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoires ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const security =
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécruité domestiques de nos hôtes.";

export const About = () => {
  return (
    <Layout>
      <Banner className="banner" image={Landscape} />
      <div className="values-container">
        <Collapse
          title="Fiabilité"
          items={reliability}
          className="value"
        ></Collapse>
        <Collapse title="Respect" items={respect} className="value"></Collapse>
        <Collapse title="Service" items={service} className="value"></Collapse>
        <Collapse
          title="Sécurité"
          items={security}
          className="value"
        ></Collapse>
      </div>
    </Layout>
  );
};
