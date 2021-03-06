import React from "react";
import Modal from "react-awesome-modal";
import modal1 from "../icons/myModal/archi.jpg";

import "../../sass/MyModal.scss";

class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  //change the state of visible to true to show the modal
  openModal() {
    this.setState({
      visible: true
    });
  }
  //change the state of visible to false to close the modal
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
            Pop Up !
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
              <pre>Laptop</pre>
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
export default MyModal;
