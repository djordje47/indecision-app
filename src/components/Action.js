import React from "react";
// Functional stateless component
const Action = props => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePickedOption}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  </div>
);

export default Action;
