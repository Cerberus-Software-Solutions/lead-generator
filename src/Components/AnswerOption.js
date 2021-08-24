import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = {
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 500,
  },
};

function quizType(props) {
  var type = "default"
  if(props.question === "What features/packages are you looking for?") {
      type = "package"
  } else if(props.question === "What features and packages are you looking for? (select all that applies)") {
      type = "truck"
  } else if(props.question === "Please provide your contact information") {
      type = "userContact"
  } 
  return type;
}

function packgageItems(item){
  return(
    <div>
      {item}
    </div>
  );
}

function AnswerOption(props) {
  switch(quizType(props)) {
    case 'package': 
      return(
        <Grid item xs={4}>
          <Button className={props.classes.image} style={{textTransform: 'none'}} value={props.answerType} onClick={props.onAnswerSelected}>
            <Paper className={props.classes.paper} style={{fontSize: 18}}>{props.answerContent}</Paper>
            <Paper className={props.classes.paper} style={{fontSize: 18}}>
              {props.answerPackageOptions.map(packgageItems)}     
            </Paper>
          </Button>
        </Grid>
      )
    case 'truck': 
      return (
        <Grid item xs={4} style={{paddingLeft:"30px"}}>
          <FormControlLabel
            control={ <Checkbox className={styles.size} name="gilad"/> }
            label={<Typography style={{fontSize: 20, color: "black"}}>{props.answerContent}</Typography>}
          />
        </Grid>
      )
    case 'userContact':
      return (
        <Grid item xs={12}>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
              <h1 style={{textTransform: 'none', fontSize: 23}}>{props.answerContent}</h1>
              <form className={props.classes.inputBox} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Enter your response here" variant="outlined" inputProps={{min: 0, style: { textAlign: 'center' }}} />
              </form>
          </div>
        </Grid>
      )
    case 'default': 
      return (
        <Grid item xs={6}>
          <Button className={props.classes.image} style={{textTransform: 'none'}} value={props.answerType} onClick={props.onAnswerSelected}>
            <Paper className={props.classes.paper} style={{fontSize: 18}}>{props.answerContent}</Paper>
          </Button>
        </Grid>
      )
  }
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
