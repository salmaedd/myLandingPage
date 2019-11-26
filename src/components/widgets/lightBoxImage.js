import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "../../sass/LightBoxImage.scss";

const images = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/12d1ef52461471.5911b7cb23e21.jpg/1400/1800",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce22e052461471.5911b7cb240f9.jpg/1400/1800",
  "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/5ec8ca52461471.5911b7cb25660.jpg/1400/1800"
];

class LightBoxImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    // list des images clickable
    return (
      <div className="lightboximage">
        <a
          className="btn-primary-outline"
          type="button"
          onClick={() => this.setState({ isOpen: true })}
          href
        >
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/12d1ef52461471.5911b7cb23e21.jpg"
            srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/12d1ef52461471.5911b7cb23e21.jpg 600w, https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/12d1ef52461471.5911b7cb23e21.jpg 1200w, https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/12d1ef52461471.5911b7cb23e21.jpg 1400w, https://mir-s3-cdn-cf.behance.net/project_modules/fs/12d1ef52461471.5911b7cb23e21.jpg 1920w, https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/12d1ef52461471.5911b7cb23e21.jpg 2800w"
            alt="lightimage"
          ></img>
        </a>
        <a
          className="btn-primary-outline"
          type="button"
          onClick={() => this.setState({ isOpen: true })}
          href
        >
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce22e052461471.5911b7cb240f9.jpg"
            srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce22e052461471.5911b7cb240f9.jpg 600w, https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ce22e052461471.5911b7cb240f9.jpg 1200w, https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ce22e052461471.5911b7cb240f9.jpg 1400w, https://mir-s3-cdn-cf.behance.net/project_modules/fs/ce22e052461471.5911b7cb240f9.jpg 1920w, https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ce22e052461471.5911b7cb240f9.jpg 2800w"
            class="ImageElement-image-2K6"
            alt="lightimage1"
          />
        </a>
        <a
          className="btn-primary-outline"
          type="button"
          onClick={() => this.setState({ isOpen: true })}
          href
        >
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5ec8ca52461471.5911b7cb25660.jpg"
            srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/5ec8ca52461471.5911b7cb25660.jpg 600w, https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5ec8ca52461471.5911b7cb25660.jpg 1200w, https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5ec8ca52461471.5911b7cb25660.jpg 1400w, https://mir-s3-cdn-cf.behance.net/project_modules/fs/5ec8ca52461471.5911b7cb25660.jpg 1920w, https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/5ec8ca52461471.5911b7cb25660.jpg 2800w"
            class="ImageElement-image-2K6"
            alt="lightimage2"
          />
        </a>

        {isOpen && (
          <Lightbox
            //choose the first picture
            mainSrc={images[photoIndex]}
            //choose the next picture
            nextSrc={images[(photoIndex + 1) % images.length]}
            //choose the previous picture
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            //close the slider of pictures
            onCloseRequest={() => this.setState({ isOpen: false })}
            //click on the previous arrow to go to the next picture
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            //click on the next arrow to go to the next picture
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}
export default LightBoxImage;
