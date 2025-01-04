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
            type="button"
            id="retryBtn"
            onClick={retryQuiz}
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            retry Quiz
          </button>
        </div>
      </>
    );
  }
}
