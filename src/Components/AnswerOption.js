import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function packgageItems(item){
  return(
    <div>
      {item}
    </div>
  );
}

function AnswerOption(props) {
  let boolean = props.question === "What features/packages are you looking for?";
  var answerOption;
  if (!boolean){
    answerOption =
    <Grid item xs={6}>
      <Button className={props.classes.image} style={{textTransform: 'none'}} value={props.answerType} onClick={props.onAnswerSelected}>
        <Paper className={props.classes.paper} style={{fontSize: 18}}>{props.answerContent}</Paper>
      </Button>
    </Grid>
  }
  else{
    answerOption =
    <Grid item xs={4}>
      <Button className={props.classes.image} style={{textTransform: 'none'}} value={props.answerType} onClick={props.onAnswerSelected}>
        <Paper className={props.classes.paper} style={{fontSize: 18}}>{props.answerContent}</Paper>
        <Paper className={props.classes.paper} style={{fontSize: 18}}>
          {props.answerPackageOptions.map(packgageItems)}     
        </Paper>
      </Button>
    </Grid>
  }
  return answerOption;
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
