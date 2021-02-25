import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect, useDispatch } from 'react-redux';
import { moveCard } from './../actions/cardsActions';

const useStyles = makeStyles({
  root: {
    minWidth: 230,
    maxWidth: 230,
    margin: 5
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

  function SimpleCard (props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const dispatch = useDispatch();

  const setCardAsDone = () => {
    //Todo: use find by index instead of name 
    const destinationList = props.lists.find((list) => list.name == "Done");
    dispatch(moveCard(props.cardID, destinationList.id));
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h2">
          {props.name}
        </Typography>
      </CardContent>
      <CardActions>
      { props.showDoneButton ? 
        <Button variant="contained" onClick={setCardAsDone}>
          Mark as done
        </Button>
       : null }
      </CardActions>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    lists: state.board.board.lists
  }
}

export default connect(mapStateToProps)(SimpleCard);