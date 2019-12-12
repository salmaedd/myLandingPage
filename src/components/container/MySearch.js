import React, { Component } from "react";
import {
    Input,
    Card,
    CardBody,
    CardTitle,

} from "mdbreact";

import blankImg from "../icons/myModal/black.jpg";
import brickImg from "../icons/myModal/brick.jpg";
import archi from "../icons/myModal/archi.jpg";
import artblank from "../icons/myModal/art-blank.jpg";
import art from "../icons/myModal/art.jpg";
import golden from "../icons/myModal/golden.jpg";
import happypic from "../icons/myModal/happypic.jpg";
import selective from "../icons/myModal/selective.jpg";


import "../../sass/MySearch.scss";

import countriesList from "./Produts.json";

class MySearch extends Component {
    state = {
        search: ""

    };

    renderProduct = Product => {
        // var code = Product.code.toLowerCase();

        /*if( search !== "" && Product.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
            return null
        }*/
        var blankImgs = {
            "image": [blankImg, brickImg, archi, artblank, art, golden, happypic, selective],
        }

        return (
            <div className="col-md-auto centerCard" style={{ marginTop: "20px" }}>
                <Card >
                    <CardBody className="">
                        <p className="">
                            <img
                                className="centerImage"
                                src={blankImgs.image[Product.image]}
                                alt={Product.name}
                                width="210"
                                height="200"
                            />
                        </p>
                        <CardTitle title={Product.name}>
                            {Product.name.substring(0, 15)}
                            {Product.name.length > 15 && "..."}
                        </CardTitle>
                    </CardBody>
                </Card>
            </div>
        );
    };

    onchange = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { search } = this.state;
        const filteredProducts = countriesList.filter(Product => {
            return Product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        return (
            <div className="flyout">
                <main style={{ marginTop: "4rem" }}>
                    <div className="container">
                        <div className="row ">
                            <div className="col inputstyle">
                                <Input
                                    icon="search"
                                    onChange={this.onchange}
                                />
                            </div>
                            <div className="col " />
                        </div>
                        <div className="row centerCard">
                            {filteredProducts.map(Product => {
                                return this.renderProduct(Product);
                            })}
                        </div>
                    </div>
                </main>

            </div>
        );
    }
}

export default MySearch;
