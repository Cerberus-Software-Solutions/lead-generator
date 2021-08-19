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

const DONE_QUIZ = "Done";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      counter: 0, //counter for the current question in the current path we're in
      currentQuestion: 1,
      currentPath: "firstQuestion",
      prevPath: "firstQuestion",
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
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

    this.setState({
      question: quizQuestions[0]["firstQuestion"][0].question,
      answerOptions: quizQuestions[0]["firstQuestion"][0].answers
    });
  }


  handleAnswerSelected(event) {
    const value = event.currentTarget.value;
    this.setUserAnswer(value);

    if (value !== DONE_QUIZ) {
      setTimeout(() => this.setNextQuestion(value), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  handleBackButtonClick(event) {
    var counter = this.state.counter;
    var currentQuestion = this.state.currentQuestion;
    var currentPath = this.state.currentPath;
    const prevPath = this.state.prevPath;

    if(currentPath !== prevPath) {
      counter = quizQuestions[0][prevPath].length-1;
      currentPath = prevPath;
    }
    
    this.setState({
      question: quizQuestions[0][prevPath][counter].question,
      answerOptions: quizQuestions[0][prevPath][counter].answers,
      answer: '',
      counter: counter - 1,
      currentQuestion: currentQuestion - 1,
      currentPath: currentPath,
      prevPath: prevPath
    });
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
    var currentQuestion = this.state.currentQuestion;
    var currentPath = this.state.currentPath;
    var prevPath = this.state.prevPath;

    if(currentPath !== nextPath) {
      counter = 0;
      prevPath = currentPath;
      currentPath = nextPath;
    }
    
    this.setState({
      question: quizQuestions[0][nextPath][counter].question,
      answerOptions: quizQuestions[0][nextPath][counter].answers,
      answer: '',
      counter: counter + 1,
      currentQuestion: currentQuestion + 1,
      currentPath: currentPath,
      prevPath: prevPath
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
        onBackButtonClick={this.handleBackButtonClick}
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
