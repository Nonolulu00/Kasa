import PropTypes from "prop-types";
import "./Banner.scss";

export const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image}></img>
      <h1 className="headline">{text}</h1>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};
