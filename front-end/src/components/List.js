import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import SimpleCard from './Card';
import styled from "styled-components";

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
        <h4>{name}</h4>
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
        </div>
        { showAddButton ?
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
            >
            Add new task
        </Button> : null
        }
      </List>
      </ListContainer>
    </div>
  );
}

