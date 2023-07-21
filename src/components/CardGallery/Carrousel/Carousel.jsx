/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./Carousel.scss";
import ArrowBack from "../../../Assets/icons/arrow_back_slider.png";
import ArrowForward from "../../../Assets/icons/arrow_forward_slider.png";
import "../../../styles/typography.scss";

export const Carousel = ({ images }) => {
  const [indexSlide, setIndexSlide] = useState(0);
  const handleNext = () => {
    if (indexSlide == images.length - 1) {
      return setIndexSlide(0);
    }
    setIndexSlide((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (indexSlide === 0) {
      return setIndexSlide(images.length - 1);
    }
    setIndexSlide((prev) => prev - 1);
  };
  console.log(indexSlide);
  return (
    <div className="carousel-container">
      <img className="accomodation-picture" src={images[indexSlide]}></img>
      <div className="arrows-container">
        <img className="arrow" src={ArrowBack} onClick={handlePrevious} />
        <img className="arrow" src={ArrowForward} onClick={handleNext} />
      </div>
      <h4 className="count">{`${indexSlide + 1}/${images.length - 1}`}</h4>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};
