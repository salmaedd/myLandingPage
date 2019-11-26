import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Navbar from "./components/widgets/MyNavbar";
import MySlider from "./components/widgets/MySlider";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrousel from "./components/widgets/Carrousel";
import Sidebar from "./components/widgets/SideBar";
import MyModal from "./components/widgets/MyModal";
import HeadPage from "./components/widgets/HeadPage";
import LightBoxImage from "./components/widgets/LightBoxImage";

const routing = (
  <Router basename={process.env.PUBLIC_URL}>
    <Route path="/" component={App} />
    <Route path="/" component={Navbar} />
    <Route path="/" component={Sidebar} />
    <div className="style-index">
      <Route path="/" component={HeadPage} />
      <Route path="/Home" component={LightBoxImage} />
      <Route path="/Home" component={Carrousel} />
      <Route Link="/" component={MyModal} />
      <Route path="/" component={MySlider} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
