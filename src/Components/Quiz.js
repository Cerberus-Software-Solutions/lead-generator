import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    display: 'inline-block',
  },
  previous: {
    padding: theme.spacing(.75),
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundColor: "#00CCCC",
    borderRadius: "18%",
    fontWeight: "700",
    justifyContent: 'flex-start',
    flexDirection: 'row',
    display: 'inline-block',
  }

}));

function Quiz(props) {
  const classes = useStyles();
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
        classes={classes}
      />
    );
  }

   function createMCQuiz(){
    return (
      <div className={classes.root}>
          <Grid container spacing={3}>
            {props.answerOptions.map(renderAnswerOptions)}
          </Grid>
          {backButton()}
        </div>
    );
  }

  function backButton(){
    let boolean = props.questionId > 1;
    var button;
    if(boolean) {
      button = 
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Button style={{textTransform: 'none'}} onClick={props.onBackButtonClick}>
              <Paper className={classes.previous} style={{fontSize: 28, color: 'white'}}>&#8249;&#8249;&#8249;</Paper>
          </Button>
        </Grid>
      </Grid>  
    }
    return button;
  }

  return (
    <section id="quiz">
      <CSSTransitionGroup 
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div key={props.questionId}>
          <QuestionCount counter={props.questionId} />
          <Question content={props.question} />
          {createMCQuiz()}
        </div>
      </CSSTransitionGroup>
    </section>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
