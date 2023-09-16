import React, { Component } from "react";
import Dsoptions from "./Dsoptions";
export default class Dsquestions extends Component {
  render() {
    const { question, DsselectedOption, DsonSubmit, DsonOptionChange } =
      this.props;
    return (
      <>
        <div className="container ">
          <h2 style={{ color: "black" }}>Welcome To DSA Quiz Contest</h2>
          <div className="quizBox ">
            <h4 id="questionId" className="my-5">
              <u>Question {question.id}</u>
            </h4>
            <h5 className="question">{question.q}</h5>
            <form onSubmit={DsonSubmit} className="form">
              <Dsoptions
                options={question.options}
                selectedOption={DsselectedOption}
                onOptionChange={DsonOptionChange}
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
