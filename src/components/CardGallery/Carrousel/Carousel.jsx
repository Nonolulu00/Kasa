/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./Carousel.scss";
import ArrowBack from "../../../Assets/icons/arrow_back_slider.png";
import ArrowForward from "../../../Assets/icons/arrow_forward_slider.png";

export const Carousel = ({ images }) => {
  const [indexSlide, setIndexSlide] = useState(0);
  return (
    <div className="carousel-container">
      <img src={images[indexSlide]}></img>
      <div className="arrows-container">
        <img className="arrow arrow-back" src={ArrowBack} />
        <img className="arrow arrow-forward" src={ArrowForward} />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};
