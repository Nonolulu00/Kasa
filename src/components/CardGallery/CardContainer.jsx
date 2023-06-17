import { Card } from "../Card/Card";
import "./CardContainer.scss";
import jsondata from "../../logements.json";

export const CardsContainer = () => {
  const data = jsondata;
  return (
    <div className="container">
      {data.map((item) => {
        return <Card key={item.id} image={item.cover} text={item.title} />;
      })}
    </div>
  );
};
