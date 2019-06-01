import React from "react";

// Functional stateless component
const Option = props => (
  <div className="option">
    <p className="option__text" key={props.index}>
      {props.count}. {props.optionText}
    </p>
    <button
      className="button button--link"
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove Option
    </button>
  </div>
);

export default Option;
