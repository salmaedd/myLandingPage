import React from "react";
import classNames from "classnames";

import "../../sass/mySlider.scss";

class mySlider extends React.Component {
  constructor(props) {
    super(props);
    // number of pictures from 0 to 4
    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    //time to change from slide to slide in ms
    this.AUTOCHANGE_TIME = 4000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    this.slides = [
      {
        city: "Paris",
        country: "France",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg"
      },
      {
        city: "Singapore",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg"
      },
      {
        city: "Prague",
        country: "Czech Republic",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg"
      },
      {
        city: "Amsterdam",
        country: "Netherlands",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg"
      },
      {
        city: "Moscow",
        country: "Russia",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg"
      }
    ];
  }
  // initialise the time to start
  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }
  // start the slide
  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }
  // auto change to the next slide in 4000
  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }
  // go to the next slide when clicking the next button
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;

    return (
      <div className="mySlider">
        <div className={classNames("slider1", { "s--ready": sliderReady })}>
          <p className="slider1__top-heading">Travelers</p>
          <div className="slider1__slides">
            {this.slides.map((slide, index) => (
              <div
                className={classNames("slider1__slide", {
                  "s--active": activeSlide === index,
                  "s--prev": prevSlide === index
                })}
                key={slide.city}
              >
                <div className="slider1__slide-content">
                  <h3 className="slider1__slide-subheading">
                    {slide.country || slide.city}
                  </h3>
                  <h2 className="slider1__slide-heading">
                    {slide.city.split("").map(l => (
                      <span>{l}</span>
                    ))}
                  </h2>
                  <p className="slider1__slide-readmore">read more</p>
                </div>
                <div className="slider1__slide-parts">
                  {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider1__slide-part" key={i}>
                      <div
                        className="slider1__slide-part-inner"
                        style={{ backgroundImage: `url(${slide.img})` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            className="slider1__control"
            onClick={() => this.changeSlides(-1)}
          />
          <div
            className="slider1__control slider1__control--right"
            onClick={() => this.changeSlides(1)}
          />
        </div>
      </div>
    );
  }
}
export default mySlider;
