import React from "react";
import Option from "./Option";
// Functional stateless component
const Options = props => (
  <div>
    <button className="button button--link" onClick={props.handleDeleteOptions}>
      Remove All
    </button>
    {props.options.length === 0 && <p>Add some options to get started!</p>}
    <ul>
      {props.options.map((option, index) => (
        <Option
          key={index}
          index={index}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ul>
  </div>
);

export default Options;
