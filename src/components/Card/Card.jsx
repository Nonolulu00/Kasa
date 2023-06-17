import PropTypes from "prop-types";
import "./Card.scss";

export const Card = ({ image, text }) => {
  return (
    <div className="card">
      <img src={image}></img>
      <h5 className="title">{text}</h5>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};
