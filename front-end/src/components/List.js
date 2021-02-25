import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import SimpleCard from './Card';
import styled from "styled-components";
import CardCreator from './CardCreator';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 240px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

export default function SimpleList({ name, cards, listID, showAddButton}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <ListContainer>
      <List component="nav" aria-label="main mailbox folders">
      <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <div>
            {cards.map((card, cIndex) => (
            <SimpleCard
                cardID={card.id}
                name={card.name}
                key={card.id}
                showDoneButton={name=="To Do" ? true : false}
                index={cIndex}
            />
            ))}
            { showAddButton ? 
              <CardCreator listID={listID} />
              : null}
        </div>
        {/* { showAddButton ?
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
            >
            Add new task
        </Button> : null
        } */}
      </List>
      </ListContainer>
    </div>
  );
}

