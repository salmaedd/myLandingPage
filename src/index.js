import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Navbar from "./components/widgets/navbar";
import mySlider from "./components/widgets/mySlider";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrousel from "./components/widgets/carrousel";
import sidebar from "./components/widgets/sideBar";
import myModal from "./components/widgets/myModal";
import headPage from "./components/widgets/headPage";
import lightBoxImage from "./components/widgets/lightBoxImage";

const routing = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route path="/" component={App} />
    <Route path="/" component={Navbar} />
    <Route path="/" component={sidebar} />
    <div className="style-index">
      <Route path="/" component={headPage} />
      <Route path="/" component={lightBoxImage} />
      <Route path="/" component={Carrousel} />
      <br></br>
      <Route Link="/" component={myModal} />
      <br></br>
      <Route path="/News" component={mySlider} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById("root"));
