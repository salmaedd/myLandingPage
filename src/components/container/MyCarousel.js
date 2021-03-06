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
import SweetAlert from 'sweetalert2-react';





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
        //  this.callMyModal = this.callMyModal.bind(this);

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
                <div class="container">
                    <div className="row ">
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
                        <div className="col">
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
                            <button type="button" className=" myButton btn btn-dark" onClick={() => this.setState({ show: true })} >Shop now</button>
                            <SweetAlert
                                show={this.state.show}
                                title="Added to your cart"
                                text="Thank you"
                                onConfirm={() => this.setState({ show: false })}
                            />
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col" >
                            <div id="wrapper">
                                <a onClick={() => this.setState({ isOpen: true })}
                                    href>
                                    <img className="pic" src={pic1} alt="pic" width="540" />
                                </a>
                                <p className="text font-weight-bold "> Click Me !</p>

                            </div>
                        </div>
                        <div className="col" >
                            <div id="wrapper">
                                <a onClick={() => this.setState({ isOpen: true })}
                                    href>
                                    <img className="pic" src={pic2} alt="pic" width="540" />
                                </a>
                                <p className="text font-weight-bold "> Click Me !</p>

                            </div>
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
            </div >
        );
    }
}
export default MyCarousel;
