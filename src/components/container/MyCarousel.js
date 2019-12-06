import React from "react";
import "../../sass/MyCarousel.scss";
import image1 from "../icons/MyCarousel/carrousel.PNG"
import image2 from "../icons/MyCarousel/carrousel2.PNG"
import back from "../icons/MyCarousel/back.svg"
import next from "../icons/MyCarousel/next.svg"
import pic1 from "../icons/MyCarousel/pic1.PNG"
import pic2 from "../icons/MyCarousel/pic2.PNG"
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


const images = [
    pic1,
    pic2];

class MyCarousel extends React.Component {
    //{ this.state.currentIndex + 1 }   index de l'image
    constructor(props) {
        super(props);

        this.pictures = [image1, image2, image1, image2]
        this.state = {
            currentIndex: 0,
            photoIndex: 0,
            isOpen: false

        }
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

    }

    goToPrevSlide() {
        const { currentIndex } = this.state;
        const newPointer = currentIndex === 0 ? this.pictures.length - 1 : currentIndex - 1;
        this.setState({ currentIndex: newPointer });
    }

    goToNextSlide() {
        const { currentIndex } = this.state;
        const newPointer = currentIndex === this.pictures.length - 1 ? 0 : currentIndex + 1;
        this.setState({ currentIndex: newPointer });
    }


    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div className="home">
                <div className="row">
                    <div className="col" >
                        <p className="p1 font-weight-bold">
                            Shop
                       </p>
                        <p className="p2 font-weight-bold">
                            Home Furnishings
                        </p>
                        <p className="p3">
                            Accessories
                        </p>
                        <p className="p4">
                            Sports
                        </p>
                        <p className="p5">
                            Clothings wear
                        </p>


                    </div>
                    <div className="col">
                        <img className="HomeImage" src={this.pictures[this.state.currentIndex]} width="300" height="300" alt="images" />
                        <br />
                        <br />
                        <a className="HomeA" onClick={this.goToPrevSlide} href>
                            <img src={back} alt="back" width="30">
                            </img>
                        </a>
                        <a className="HomeA1" onClick={this.goToNextSlide} href>
                            <img src={next} alt="next" width="30">
                            </img>
                        </a>
                        <br />
                    </div>
                    <br></br>
                    <br></br>


                    <div className="col ">
                        <p className="p6 font-weight-bold">
                            1.0                       </p>
                        <br></br>
                        <br></br>
                        <br></br>

                        <p className="p7">
                            Limited Edition
                        </p>


                        <p className="p8 font-weight-bold">
                            White Clock
                        </p>
                        <button type="button" className=" myButton btn btn-dark" >Shop now</button>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col" >
                        <a className="HomeA1" onClick={() => this.setState({ isOpen: true })}
                            href>
                            <img src={pic1} alt="pic1" width="560">
                            </img>
                        </a></div>
                    <div className="col" >
                        <a className="HomeA1" onClick={() => this.setState({ isOpen: true })}
                            href>
                            <img src={pic2} alt="pic2" width="560">
                            </img>
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
                </div>


            </div>



        );
    }
}
export default MyCarousel;
