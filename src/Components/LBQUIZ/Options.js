import React, { Component } from "react";

export default class Options extends Component {
  render() {
    const { options, selectedOption, onOptionChange } = this.props;
    return (
      <div className="options">
        {options.map((option, index) => (
          <div className="form-check form-check-inline , input">
            <input
              className="form-check-input"
              type="radio"
              name="option"
              id="options"
              checked={selectedOption === option}
              value={option}
              onChange={onOptionChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              {option}
            </label>
          </div>
        ))}
      </div>
    );
  }
}
