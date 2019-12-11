import React from "react";
import Modal from "react-awesome-modal";
import modal1 from "../icons/myModal/MyModalPic.PNG";
import close from "../icons/myModal/closeicon.png";

import "../../sass/MyProductModal.scss";

class MyProductModal extends React.Component {
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
                        onClick={() => this.openModal()} >
                        Pop Up !
                    </button>
                </div>
                <Modal
                    visible={this.state.visible}
                    width="850"
                    height="400"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}>
                    <div clssName="sidebarmodal">
                        <div className="row">
                            <img className="closebutton" src={close} alt="close" onClick={() => this.closeModal()}></img>
                        </div>
                        <div className="row">
                            <div className="col img-fluid" >
                                <img src={modal1} alt="modal1" />
                            </div>
                            <div className="col img-fluid1" >
                                <h4>Need Help ?</h4>
                                <div>
                                    {" "}
                                    <span className="text1">Start a live call with us now to have us attend to any of your enquiries</span>
                                </div>
                                <div className="row">
                                    <div className="col img-fluid2" >
                                        <button className="btn btn-light btn-lg MyButton1" onClick={() => this.closeModal()}>
                                            <p className="textsize">Request for call back </p>
                                        </button>
                                    </div>
                                    <div className="col img-fluid2" >
                                        <button className="btn btn-dark btn-lg MyButton" onClick={() => this.closeModal()}>
                                            <p className="textsize"> Start Live Chat </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </section>
        );
    }
}
export default MyProductModal;
