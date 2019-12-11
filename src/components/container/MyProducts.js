import React from "react";
import "../../sass/MyProduct.scss";
import prod3 from "../icons/MyProducts/prod3.png"
import prod4 from "../icons/MyProducts/prod4.png"
import prod5 from "../icons/MyProducts/prod5.png"
import prod6 from "../icons/MyProducts/prod6.png"
import prod7 from "../icons/MyProducts/prod7.png"
import prod8 from "../icons/MyProducts/prod8.png"
import prod9 from "../icons/MyProducts/prod9.png"
import prod10 from "../icons/MyProducts/prod10.png"
import prod11 from "../icons/MyProducts/prod11.png"
import prod12 from "../icons/MyProducts/prod12.png"
import prod13 from "../icons/MyProducts/prod13.png"
import prod14 from "../icons/MyProducts/prod14.png"
import prod15 from "../icons/MyProducts/prod15.png"
import back from "../icons/MyCarousel/back.svg"
import next from "../icons/MyCarousel/next.svg"



class MyProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            next: "",
            prev: ""
        }
        this.goToPreviousProducts = this.goToPreviousProducts.bind(this);
        this.goToNextProducts = this.goToNextProducts.bind(this);

    }
    goToPreviousProducts() {
        this.setState({ visible: true, next: "font-weight-light" });


    }
    goToNextProducts() {
        this.setState({ visible: false, prev: "font-weight-bold" });
    }
    render() {
        return (
            <div className="MyProduct" >
                <div class="container">
                    <div className="row">
                        <div className="col-sm-1" >

                        </div>
                        <div className="col-sm-2" >
                            <a className="btn" href>
                                <p className="font-weight-bold">
                                    Popular
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-3" >
                            <a className="btn" href>
                                <p className="">
                                    Shop
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-3" >
                            <a className="btn " href onClick={this.goToPreviousProducts}>
                                {(this.state.visible === true) ?
                                    (<p className="font-weight-light">
                                        <img src={back} alt="back" width="20">
                                        </img>
                                        Previous
                                     </p>)
                                    :
                                    (<p className="font-weight-bold">
                                        <img src={back} alt="back" width="20">
                                        </img> Previous
                                    </p>)}
                            </a>
                        </div>
                        <div className="col-sm-3" >
                            <a className="btn" href onClick={this.goToNextProducts}>
                                {(this.state.visible === true) ? (<p className="font-weight-bold">
                                    Next
                                     <img src={next} alt="next" width="20">
                                    </img>
                                </p>)
                                    :
                                    (<p className="font-weight-light">
                                        Next
                                         <img src={next} alt="next" width="20">
                                        </img>
                                    </p>)}
                            </a>
                        </div>
                    </div>
                    {this.state.visible === true ? (
                        <div className="MyProductContainer">
                            <div className="row">
                                <div className="col-sm-3" >
                                    <img className="imgprod" src={prod9} alt="prod9" width="190">
                                    </img>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para font-weight-bold "> Picklesuit </p>
                                        </div>
                                        <div className="col" >
                                            <p className="para1">  John Dealson </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para2"> 150.00$ </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <img className="imgprod" src={prod10} alt="prod10" width="190">
                                    </img>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para font-weight-bold "> Picklesuit </p>
                                        </div>
                                        <div className="col" >
                                            <p className="para1">  John Dealson </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para2"> 150.00$ </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <img className="imgprod" src={prod3} alt="prod3" width="190">
                                    </img>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para font-weight-bold "> Picklesuit </p>
                                        </div>
                                        <div className="col" >
                                            <p className="para1">  John Dealson </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para2"> 150.00$ </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <img className="imgprod" src={prod4} alt="prod4" width="190">
                                    </img>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para font-weight-bold "> Picklesuit </p>
                                        </div>
                                        <div className="col" >
                                            <p className="para1">  John Dealson </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para2"> 150.00$ </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-sm-3" >
                                    <img className="imgprod" src={prod5} alt="prod5" width="190">
                                    </img>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para font-weight-bold "> Picklesuit </p>
                                        </div>
                                        <div className="col" >
                                            <p className="para1">  John Dealson </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para2"> 150.00$ </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <img className="imgprod" src={prod6} alt="prod6" width="190">
                                    </img>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para font-weight-bold "> Picklesuit </p>
                                        </div>
                                        <div className="col" >
                                            <p className="para1">  John Dealson </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para2"> 150.00$ </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <img className="imgprod" src={prod7} alt="prod7" width="190">
                                    </img>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para font-weight-bold "> Picklesuit </p>
                                        </div>
                                        <div className="col" >
                                            <p className="para1">  John Dealson </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para2"> 150.00$ </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" >
                                    <img className="imgprod" src={prod8} alt="prod8" width="190">
                                    </img>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para font-weight-bold "> Picklesuit </p>
                                        </div>
                                        <div className="col" >
                                            <p className="para1">  John Dealson </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" >
                                            <p className="para2"> 150.00$ </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                        :

                        (
                            <div className="MyProductContainer">
                                <div className="row">
                                    <div className="col-sm-3" >
                                        <img className="imgprod" src={prod11} alt="prod11" width="190">
                                        </img>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para font-weight-bold "> Picklesuit </p>
                                            </div>
                                            <div className="col" >
                                                <p className="para1">  John Dealson </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para2"> 150.00$ </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3" >
                                        <img className="imgprod" src={prod12} alt="prod12" width="190">
                                        </img>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para font-weight-bold "> Picklesuit </p>
                                            </div>
                                            <div className="col" >
                                                <p className="para1">  John Dealson </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para2"> 150.00$ </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3" >
                                        <img className="imgprod" src={prod13} alt="prod13" width="190">
                                        </img>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para font-weight-bold "> Picklesuit </p>
                                            </div>
                                            <div className="col" >
                                                <p className="para1">  John Dealson </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para2"> 150.00$ </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3" >
                                        <img className="imgprod" src={prod14} alt="prod14" width="190">
                                        </img>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para font-weight-bold "> Picklesuit </p>
                                            </div>
                                            <div className="col" >
                                                <p className="para1">  John Dealson </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para2"> 150.00$ </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-sm-3" >
                                        <img className="imgprod" src={prod15} alt="prod15" width="190">
                                        </img>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para font-weight-bold "> Picklesuit </p>
                                            </div>
                                            <div className="col" >
                                                <p className="para1">  John Dealson </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para2"> 150.00$ </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3" >
                                        <img className="imgprod" src={prod11} alt="prod11" width="190">
                                        </img>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para font-weight-bold "> Picklesuit </p>
                                            </div>
                                            <div className="col" >
                                                <p className="para1">  John Dealson </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para2"> 150.00$ </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3" >
                                        <img className="imgprod" src={prod15} alt="prod15" width="190">
                                        </img>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para font-weight-bold "> Picklesuit </p>
                                            </div>
                                            <div className="col" >
                                                <p className="para1">  John Dealson </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para2"> 150.00$ </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3" >
                                        <img className="imgprod" src={prod13} alt="prod13" width="190">
                                        </img>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para font-weight-bold "> Picklesuit </p>
                                            </div>
                                            <div className="col" >
                                                <p className="para1">  John Dealson </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col" >
                                                <p className="para2"> 150.00$ </p>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default MyProducts;
