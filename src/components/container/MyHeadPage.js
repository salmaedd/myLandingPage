import React from "react";
import "../../sass/MyHeadPage.scss";
import black from "../icons/MyHeadPage/menublack.svg";
import blacksearch from "../icons/MyHeadPage/searchblack.svg";



class MyHeadPage extends React.Component {
    constructor() {
        super()
        this.images = [
            'https://source.unsplash.com/random/100x100',
            'https://source.unsplash.com/random/120x100',
            'https://source.unsplash.com/random/130x100',
            'https://source.unsplash.com/random/140x100',
            'https://source.unsplash.com/random/150x100',
            'https://source.unsplash.com/random/160x100',
        ]
        this.state = {
            currentIndex: 0,
        }
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

    }
    goToPrevSlide() {
        const { currentIndex } = this.state;
        const newPointer = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
        this.setState({ currentIndex: newPointer });
    }

    goToNextSlide() {
        const { currentIndex } = this.state;
        const newPointer = currentIndex === this.images.length - 1 ? 0 : currentIndex + 1;
        this.setState({ currentIndex: newPointer });
    }

    render() {
        return (
            <div className="mynavbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{ backgroundColor: "white" }}>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <a className="navbar-brand font-weight-bold" href="/Home">
                                    <img className="image" src={black} alt="black" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="btn" href>
                                    <img className="searchimage" src={blacksearch} alt="blacksearch" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="btn h3 " href>
                                    <h3 className="font-weight-bold">minim</h3>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="btn h3" href>
                                    <h5>Account</h5>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className=" btn save" href>
                                    <i class="fa fa-hdd-o" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default MyHeadPage;
