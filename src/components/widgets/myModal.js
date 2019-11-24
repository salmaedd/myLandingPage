import React from "react";
import Modal from "react-awesome-modal";
import modal12 from "../icons/carrouselIcons/sidebar_1.png";
import modal1 from "../icons/myModal/archi.jpg";
import modal2 from "../icons/myModal/art-blank.jpg";
import modal3 from "../icons/myModal/art.jpg";
import modal4 from "../icons/myModal/black.jpg";
import modal5 from "../icons/myModal/brick.jpg";
import modal6 from "../icons/myModal/golden.jpg";
import modal7 from "../icons/myModal/happypic.jpg";
import modal8 from "../icons/myModal/selective.jpg";

import "../../sass/myModal.scss";

class myModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <section className="button-Modal">
        <div className="col">
          <button
            className="btn btn-dark"
            value="Open"
            onClick={() => this.openModal()}
          >
            {" "}
            My MODAL
          </button>
        </div>

        <Modal
          visible={this.state.visible}
          width="400"
          height="310"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div className="sidebarmodal">
            <h1>Minim</h1>
            <img src={modal1} alt="modal1" />
            <div>
              {" "}
              <span className="font-weight-bold">E-commerce Website</span>
              <pre>Salma Edd</pre>
            </div>

            <button className="btn btn-dark" onClick={() => this.closeModal()}>
              Close
            </button>
          </div>
        </Modal>
      </section>
    );
  }
}
export default myModal;
