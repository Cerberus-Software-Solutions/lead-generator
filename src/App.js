import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import quizQuestions from './Questions/quizQuestions.js';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

var currentPath = "";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      counter: 0,
      currentQuestion: 1,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();

    console.log(quizQuestions[0]["firstQuestion"].answers)

    this.setState({
      question: quizQuestions[0]["firstQuestion"][0].question,
      answerOptions: quizQuestions[0]["firstQuestion"][0].answers
    });
  }


  handleAnswerSelected(event) {
    const value = event.currentTarget.value;
    this.setUserAnswer(value);

    if (this.state.questionId < quizQuestions[0][value].length) {
      setTimeout(() => this.setNextQuestion(value), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion(nextPath) {
    var counter = this.state.counter;
    var questionId = this.state.questionId;
    var currentQuestion = this.state.currentQuestion;

    if(currentPath !== nextPath) {
      counter = 0;
      questionId = 0;
      currentPath = nextPath;
    }
    
    this.setState({
      questionId: questionId + 1,
      question: quizQuestions[0][nextPath][counter].question,
      answerOptions: quizQuestions[0][nextPath][counter].answers,
      answer: '',
      counter: counter + 1,
      currentQuestion: currentQuestion + 1,
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    
    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.currentQuestion}
        question={this.state.question}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
