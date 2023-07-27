import "./Card.scss";
import "../../styles/typography.scss";
import { Link } from "react-router-dom";

export const Card = ({ id, image, text }) => {
  return (
    <Link to={`/accomodation/${id}`} className="card">
      <img src={image}></img>
      <h4 className="title">{text}</h4>
    </Link>
  );
};
