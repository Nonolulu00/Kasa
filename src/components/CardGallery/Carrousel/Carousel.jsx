import { useState } from "react";
import ArrowBack from "../../../Assets/icons/carrousel_arrow_back.svg";
import ArrowForward from "../../../Assets/icons/carrousel_arrow_forward.svg";
import { Banner } from "../../Banner/Banner";

export const Carousel = (items, totalPictures, index) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };
  return (
    <div className="carousel-container">
      <div className="carousel-items">
        {items.map((item, index) => {
          <div className="image-container" key={index}>
            <img src={item}></img>
            {/* {activeIndex !== 0 && (

              <ArrowBack>
            )

            } */}
          </div>;
        })}
      </div>
    </div>
  );
};
