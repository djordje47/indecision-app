import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel='Selected Option'
    onRequestClose={props.clearSelectedOption}
    ariaHideApp={false}
  >
    <h3>Selected option:</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.clearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;
