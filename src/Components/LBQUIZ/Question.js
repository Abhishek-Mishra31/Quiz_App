import React, { Component } from "react";
import Options from "./Options";

export default class Question extends Component {
  render() {
    const { question, selectedOption, onOptionChange, onSubmit } = this.props;
    return (
      <>
        <div className="container ">
          <div className="quizBox ">
            <h4 id="questionId" className="my-5">
              <u>Question {question.id}</u>
            </h4>
            <h5 className="question">{question.question}</h5>
            <form onSubmit={onSubmit} className="form">
              <Options
                options={question.options}
                selectedOption={selectedOption}
                onOptionChange={onOptionChange}
              />
              <button id="btn" type="Submit" className="btn btn-info">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
