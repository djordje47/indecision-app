import React from "react";
import Option from "./Option";
// Functional stateless component
const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Add some options to get started!</p>
    )}
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
