import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.clearSelectedOption}
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected option:</h3>
    <p className="modal__body">{props.selectedOption}</p>
    <button className="button" onClick={props.clearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
