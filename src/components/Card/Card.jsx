import PropTypes from "prop-types";
import "./Card.scss";
import "../../styles/typography.scss";
import { Link } from "react-router-dom";

export const Card = ({ image, text }) => {
  return (
    <Link>
      <div className="card">
        <img src={image}></img>
        <h4 className="title">{text}</h4>
      </div>
    </Link>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};
