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
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
