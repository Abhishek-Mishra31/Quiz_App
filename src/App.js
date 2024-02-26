import React, { Component } from "react";
import questionDB from "./Components/LBQUIZ/LBQuestions_db";
import Score from "./Components/LBQUIZ/Score";
import Question from "./Components/LBQUIZ/Question";
import Navbar from "./Components/LBQUIZ/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dsquestions from "./Components/DSQUIZ/Dsquestions";
import Dsquestion from "./Components/DSQUIZ/DBQuestion";
import "./App.css";
import DsScore from "./Components/DSQUIZ/DsScore";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: questionDB,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,

      question: Dsquestion,
      DscurrentQuestion: 0,
      DsselectedOption: "",
      Dsscore: 0,
      DsquizEnd: false,
    };
  }

  

                  // LANGUAGE BASED QUIZ METHODS ARE BELOW :--

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  };

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  };

  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  };

  retryQuiz = () => {
    this.setState({
      questionBank: questionDB,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    });
  };

                // DSA BASED QUIZ METHODS ARE BELOW :---

  DshandleOptionChange = (d) => {
    this.setState({ DsselectedOption: d.target.value });
  };

  DshandleFormSubmit = (d) => {
    d.preventDefault();
    this.DscheckAnswer();
    this.DshandleNextQuestion();
  };

  DscheckAnswer = () => {
    const { question, DscurrentQuestion, DsselectedOption, Dsscore } =
      this.state;
    if (DsselectedOption === question[DscurrentQuestion].answer) {
      this.setState((prevState) => ({ Dsscore: prevState.Dsscore + 1 }));
    }
  };

  DsretryQuiz = () => {
    this.setState({
      question: Dsquestion,
      DscurrentQuestion: 0,
      DsselectedOption: "",
      Dsscore: 0,
      DsquizEnd: false,
    });
  };

  DshandleNextQuestion = () => {
    const { question, DscurrentQuestion } = this.state;
    if (DscurrentQuestion + 1 < question.length) {
      this.setState((prevState) => ({
        DscurrentQuestion: prevState.DscurrentQuestion + 1,
        DsselectedOption: "",
      }));
    } else {
      this.setState({
        DsquizEnd: true,
      });
    }
  };

  render() {
    const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
      this.state;

    const {
      DscurrentQuestion,
      question,
      DsselectedOption,
      DsonOptionChange,
      DsonSubmit,
      Dsscore,
      DsquizEnd,
    } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              exact
              path="/ds"
              element={
                <>
                  {!DsquizEnd ? (
                    <Dsquestions
                      question={question[DscurrentQuestion]}
                      DsselectedOption={DsselectedOption}
                      DsonOptionChange={this.DshandleOptionChange}
                      DsonSubmit={this.DshandleFormSubmit}
                    />
                  ) : (
                    <DsScore
                      DsretryQuiz={this.DsretryQuiz}
                      Dsscore={Dsscore}
                      Dsquestion={question}
                    />
                  )}
                </>
              }
            />

            <Route
              exact
              path="/"
              element={
                <>
                  {!quizEnd ? (
                    <Question
                      question={questionBank[currentQuestion]}
                      selectedOption={selectedOption}
                      onOptionChange={this.handleOptionChange}
                      onSubmit={this.handleFormSubmit}
                    />
                  ) : (
                    <Score
                      questionBank={questionDB}
                      retryQuiz={this.retryQuiz}
                      score={score}
                    />
                  )}
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
