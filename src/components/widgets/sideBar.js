import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "../../sass/SideBar.scss";

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidenav">
        <div className="col-lg-7 mb-4 ">
          <Tooltip title="Reglage" placement="left">
            <button className="btn btn-primary btn-circle info-btn mb-5 mb-1">
              <i className="fa fa-cog"></i>
            </button>
          </Tooltip>
          <Tooltip title="Message" placement="left">
            <button
              className="btn btn-info btn-circle info-btn mb-5 mb-1"
              onClick
            >
              <i className="fa fa-paper-plane"></i>
            </button>
          </Tooltip>
          <Tooltip title="Tags" placement="left">
            <button className="btn btn-warning btn-circle info-btn mb-5 mb-1">
              <i className="fa fa-tags"></i>
            </button>
          </Tooltip>
          <Tooltip title="Parametres" placement="left">
            <button className="btn btn-danger btn-circle info-btn mb-5 mb-1">
              <i className="fa fa-sliders"></i>
            </button>
          </Tooltip>
          <Tooltip title="Chercher" placement="left">
            <button className="btn btn-dark btn-circle info-btn mb-5 mb-1">
              <i className="fa fa-search"></i>
            </button>
          </Tooltip>
          <Tooltip title="Reglage" placement="left">
            <button className="btn btn-secondary btn-circle info-btn mb-5 mb-1">
              <i className="fa fa-wrench"></i>
            </button>
          </Tooltip>
          <Tooltip title="Statistique" placement="left">
            <button className="btn btn-light btn-circle info-btn mb-5 mb-1">
              <i className="fa fa-bar-chart"></i>
            </button>
          </Tooltip>
        </div>
      </div>
    );
  }
}
export default SideBar;
