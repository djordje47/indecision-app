import React from "react";

// Functional stateless component
const Option = props => (
  <div>
    <li key={props.index}>{props.optionText}</li>
    <button
      className="button button--link"
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove Item
    </button>
  </div>
);

export default Option;
