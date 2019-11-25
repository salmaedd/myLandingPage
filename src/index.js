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
    <Route path={process.env.PUBLIC_URL + "/"} component={App} />
    <Route path={process.env.PUBLIC_URL + "/"} component={Navbar} />
    <Route path={process.env.PUBLIC_URL + "/"} component={sidebar} />
    <div className="style-index">
      <Route path={process.env.PUBLIC_URL + "/"} component={headPage} />
      <Route
        path={process.env.PUBLIC_URL + "/Home"}
        component={lightBoxImage}
      />
      <Route path={process.env.PUBLIC_URL + "/Home"} component={Carrousel} />
      <br></br>
      <Route Link={process.env.PUBLIC_URL + "/Home"} component={myModal} />
      <br></br>
      <Route path={process.env.PUBLIC_URL + "/News"} component={mySlider} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
