import React from "react";
import { Carousel } from "react-responsive-carousel";
import pic1 from "../icons/carrouselIcons/birdeyes.jpg";
import pic2 from "../icons/carrouselIcons/bluecity.jpg";
import pic3 from "../icons/carrouselIcons/close.jpg";
import pic4 from "../icons/carrouselIcons/guit.jpg";
import pic5 from "../icons/carrouselIcons/high.jpg";
import pic6 from "../icons/carrouselIcons/highquality.jpg";
import pic9 from "../icons/carrouselIcons/modern.jpg";
import pic10 from "../icons/carrouselIcons/silhouette.jpg";
import pic11 from "../icons/carrouselIcons/bg-2.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../sass/carrousel.scss";

function Carrousel() {
  return (
    <div className="carrousel-style">
      <Carousel autoPlay="true" infiniteLoop="true" transitionTime="350">
        <div>
          <img src={pic1} alt="pic1" />
        </div>

        <div>
          <img src={pic2} alt="pic2" />
        </div>
        <div>
          <img src={pic3} alt="pic3" />
        </div>
        <div>
          <img src={pic4} alt="pic4" />
        </div>

        <div>
          <img src={pic5} alt="pic5" />
        </div>
        <div>
          <img src={pic6} alt="pic6" />
        </div>
        <div>
          <img src={pic9} alt="pic9" />
        </div>

        <div>
          <img src={pic10} alt="pic10" />
        </div>
        <div>
          <img src={pic11} alt="pic11" />
        </div>
      </Carousel>
    </div>
  );
}

export default Carrousel;
