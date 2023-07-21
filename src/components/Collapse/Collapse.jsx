/* eslint-disable react/prop-types */
import { useState } from "react";
import ArrowBack from "../../Assets/icons/arrowBack.svg";
import "./Collapse.scss";

export const CollapseMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  const open = isOpen ? "content-container" : "hide";
  return (
    <div
      className="collapse-container"
      open={isOpen}
      style={
        isOpen
          ? { backgroundColor: "#f6f6f6" }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="header">
        <h4>{title}</h4>
        {isOpen ? (
          <img
            src={ArrowBack}
            className="openedArrow"
            onClick={() => handleClick()}
          />
        ) : (
          <img
            src={ArrowBack}
            className="closedArrow"
            onClick={() => handleClick()}
          />
        )}
      </div>
      <div className={open}>
        <div className="content">
          {typeof items === "object" &&
            items.map((item) => <h4 key={item}>{item}</h4>)}
          {typeof items === "string" && <h4>{items}</h4>}
        </div>
      </div>
    </div>
  );
};
