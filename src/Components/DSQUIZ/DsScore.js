import React, { Component } from "react";

export default class DsScore extends Component {
  render() {
    const { DsretryQuiz, Dsscore, Dsquestion } = this.props;
    return (
      <div className="ContainerScore mt-5">
        <h2>
          <i>Results :- </i>
        </h2>
        <div className="score my-5">
          <h4>
            You scored {Dsscore} out of {Dsquestion.length}
          </h4>
        </div>
        <button
          id="retryBtn"
          onClick={DsretryQuiz}
          type="Button"
          className="btn btn-secondary"
        >
          Retry Quiz
        </button>
      </div>
    );
  }
}
