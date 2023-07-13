import { useState } from "react";
import ArrowBack from "../../Assets/icons/arrowBack.svg";
import PropTypes from "prop-types";
import "./Collapse.scss";

export const CollapseMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    if (isOpen === false) {
      return setIsOpen(true);
    }
    return setIsOpen(false);
  }

  return (
    <div className="collapse-container" open={isOpen}>
      <div className="header">
        <h4>{label}</h4>
        {isOpen ? (
          <img src={ArrowBack} className="openedArrow" onClick={handleClick} />
        ) : (
          <img src={ArrowBack} className="closedArrow" onClick={handleClick} />
        )}
      </div>
      <div
        className="content"
        style={isOpen ? { display: "flex" } : { display: "none" }}
      >
        {items.map((item) => (
          <h4 key={item}>{item}</h4>
        ))}
      </div>
    </div>
  );
};

CollapseMenu.propTypes = {
  label: PropTypes.string.isrequired,
  items: PropTypes.array.isRequired,
};
