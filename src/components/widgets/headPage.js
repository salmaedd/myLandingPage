import React from "react";
import avatar from "../icons/avatar.png";
import Popup from "reactjs-popup";

import "../../sass/HeadPage.scss";

class HeadPage extends React.Component {
  render() {
    return (
      <div className="row headpage">
        <Popup
          trigger={
            <a className="btn btn-dark1 btn-circle1" href>
              <img className="image" src={avatar} alt="avatar" />
            </a>
          }
          position="left"
        >
          <div>Popup content here !!</div>
        </Popup>

        <div className="col">
          <span className="font-weight-bold">Minim E-commerce Website</span>
          <pre>Salma Edd</pre>
        </div>
      </div>
    );
  }
}
export default HeadPage;
