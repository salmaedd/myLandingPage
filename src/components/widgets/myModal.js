import React from "react";
import Modal from "react-awesome-modal";
import modal1 from "../icons/myModal/archi.jpg";

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
