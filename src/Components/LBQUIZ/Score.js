import React, { Component } from "react";

export default class Score extends Component {
  render() {
    const { retryQuiz, score, questionBank } = this.props;

    return (
      <>
        <div className="ContainerScore mt-5">
          <h2>
            <i>Results :- </i>
          </h2>
          <div className="score my-5">
            <h4>
              You scored {score} out of {questionBank.length}
            </h4>
          </div>
          <button
            id="retryBtn"
            onClick={retryQuiz}
            type="Button"
            className="btn btn-secondary"
          >
            Retry Quiz
          </button>
        </div>
      </>
    );
  }
}
