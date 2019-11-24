import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
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
  <Router>
    <Route path="/" component={App} />
    <Route path="/" component={Navbar} />
    <div>
      <Route path="/" component={sidebar} />
    </div>
    <br></br>
    <div className="style-index">
      <Route path="/" component={headPage} />
    </div>
    <Route path="/Home" component={lightBoxImage} />
    <Route path="/Contact-us" component={headPage} />
    <Route path="/Contact-us" component={Carrousel} />
    <Route path="/Home" component={myModal} />
    <Route path="/News" component={mySlider} />
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
