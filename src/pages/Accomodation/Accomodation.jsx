import { CollapseMenu } from "../../components/Collapse/Collapse";
import "../../styles/typography.scss";
import jsondata from "../../logements.json";

const data = jsondata;
const index = data.findIndex((accomodation) => accomodation.id === "c67ab8a7");
console.log(index);
const accomodation = data[index];
export const Accomodation = () => {
  return (
    <CollapseMenu
      label="Equipements"
      items={accomodation.equipments}
    ></CollapseMenu>
  );
};
