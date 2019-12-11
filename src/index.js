import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MyHeadPage from "./components/container/MyHeadPage"
import MyCarousel from "./components/container/MyCarousel"
import MyProducts from "./components/container/MyProducts"
import MyProductModal from "./components/container/MyProductModal"
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router basename={process.env.PUBLIC_URL}>
    <Route path="/" component={App} />
    <Route path="/" component={MyHeadPage} />
    <Route path="/" component={MyCarousel} />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Route path="/" component={MyProducts} />
    <br></br>
    <br></br>
    <br></br>
    <Route path="/" component={MyProductModal} />
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
