import React, { Component } from "react";
import Slider from "react-slick";
import puzzle from "./pics/disney_puzzle.png";
import chip from "./pics/disney_chip.png";
import cosmetic from "./pics/disney_cosmetic.jpg";
import figure from "./pics/disney_figure.jpg";
import pen from "./pics/disney_pen.png";
import "../styles/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "ease-in-out",
    };
    return (
      <div className="sliderContainer">
        <div className="typewriter">
          <h2>Welcome to MudYe Disney.</h2>
        </div>
        <Slider {...settings}>
          <div>
            <img src={puzzle} alt="puzzle" />
          </div>
          <div>
            <img src={chip} alt="chip" />
          </div>
          <div>
            <img src={cosmetic} alt="cosmetic" />
          </div>
          <div>
            <img src={figure} alt="figure" />
          </div>
          <div>
            <img src={cosmetic} alt="cosmetic" />
          </div>
          <div>
            <img src={pen} alt="pen" />
          </div>
        </Slider>
      </div>
    );
  }
}
