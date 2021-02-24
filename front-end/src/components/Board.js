import React,  { useEffect } from 'react'
import styled from "styled-components";
import SimpleList from './List';
import { connect } from 'react-redux'
import { fetchBoard } from '../actions/boardActions';

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export function Board({state, fetchBoard}) {
    useEffect(() => {
        fetchBoard()
      }, [])

    return (
        state.loading ? 
        (<h2>Loading.....</h2>) :
        <div>
            <ListsContainer>
              {state.board.lists.map((list) => {
                  return (
                    <SimpleList
                        name={list.name}
                        cards={list.cards}
                        listID={list.id}
                        showAddButton={list.name=="To Do" ? true : false}
                        key={list.id}
                    />
                  );
              })}
            </ListsContainer>
        </div>
    )
}
const mapStateToProps = state => {
    return {
      state: state.board
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchBoard: () => dispatch(fetchBoard())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Board)
