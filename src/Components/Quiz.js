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
import TextField from '@material-ui/core/TextField';

const DONE_QUIZ = "Done";
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
  },
  finish: {
    padding: theme.spacing(.75),
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundColor: "#00CCCC",
    borderRadius: "10%",
    fontWeight: "700",
  },

  h1: {
    textAlign: 'center',
    marginTop: '20px'
  },
  inputBox: {
      '& > *': {
        marginTop: theme.spacing(1),
        width: '75ch',
      },
  },
}));

function Quiz(props) {
  const classes = useStyles();
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answerPackageOptions={key.packageOptions}
        answer={props.answer}
        questionId={props.questionId}
        question={props.question}
        onAnswerSelected={props.onAnswerSelected}
        classes={classes}
      />
    );
  }

   function createMCQuiz(){
    return (
      <div className={classes.root}>
          <Grid container direction="row" justifyContent="center">
            {props.answerOptions.map(renderAnswerOptions)}
          </Grid>
          {addTextfield()}
          {backButton()}
        </div>
    );
  }

  function addTextfield(){
    var format;
    if(props.hasInput){
      format =
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
          <h1  className={classes.h1} style={{textTransform: 'none', fontSize: 23}}>{props.inputContent}</h1>
          <form className={classes.inputBox} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Enter your response here" variant="outlined" inputProps={{min: 0, style: { textAlign: 'center' }}} />
          </form>
      </div>  
    }
    return format;
  }

  function backButton(){
    let boolean = props.questionId > 1;
    var button;
    if(boolean) {
      button = 
      <Grid container direction="row" justifyContent={props.answerOptions[0].type === DONE_QUIZ ? "space-around":"space-between"}  alignItems="center">
        <Grid>
            <Button style={{textTransform: 'none'}} onClick={props.onBackButtonClick}>
                <Paper className={classes.previous} style={{fontSize: 28, color: 'white'}}>&#160;&#160;&#160;&#8249;&#160;&#160;&#160;</Paper>
            </Button>
          </Grid>
          <Grid></Grid>
          {finishButton()}
      </Grid>  
    }
    return button;
  }

  function finishButton() {
    let boolean = props.answerOptions[0].type === DONE_QUIZ;
    var finishButton;
    if(boolean) {
      finishButton = 
        <Grid>
          <Button style={{textTransform: 'none'}} value={"Done"} onClick={props.onAnswerSelected}>
              <Paper className={classes.finish} style={{fontSize: 28, color: 'white'}}>&#160;&#160;&#160;Finish&#160;&#160;&#160;</Paper>
          </Button>
        </Grid>
    }
    return finishButton;
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
