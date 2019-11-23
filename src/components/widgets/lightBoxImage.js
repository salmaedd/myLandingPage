import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "../../sass/lightBoxImage.scss";

const images = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/12d1ef52461471.5911b7cb23e21.jpg/1400/1800",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce22e052461471.5911b7cb240f9.jpg/1400/1800"
];

class lightBoxImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

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
            sizes="(max-width: 1400px) 100vw, 1400px"
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
            sizes="(max-width: 1400px) 100vw, 1400px"
            class="ImageElement-image-2K6"
            alt="lightimage1"
          />
        </a>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
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
export default lightBoxImage;
