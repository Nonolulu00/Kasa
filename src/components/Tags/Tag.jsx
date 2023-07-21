import PropTypes from "prop-types";
import "./Tag.scss";

export const Tag = ({ tagName }) => {
  return (
    <div className="tag-container">
      <h5>{tagName}</h5>
    </div>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};
