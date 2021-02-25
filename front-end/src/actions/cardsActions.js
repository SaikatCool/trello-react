import axios from 'axios'
import {
  MOVE_CARD_REQUEST,
  MOVE_CARD_SUCCESS,
  MOVE_CARD_FAILURE,
  ADD_CARD_REQUEST,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE
} from './types'

export const moveCard = (cardId, destinationListId) => {
    return (dispatch) => {
      dispatch(moveCardRequest());
      let payload = {"id" : cardId, "listId" : destinationListId};
      axios
        .put('http://localhost:3001/api/v1/cards', payload)
        .then(() => {
          dispatch(moveCardSuccess(payload))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(moveCardFailure(error.message))
        })
    }
  }

  export const moveCardRequest = () => {
      console.log("Sending Move card request");
    return {
      type: MOVE_CARD_REQUEST
    }
  }
  
  export const moveCardSuccess = data => {
    return {
      type: MOVE_CARD_SUCCESS,
      payload: data
    }
  }
  
  export const moveCardFailure = error => {
    console.log("Move card failed, error: " + error);
    return {
      type: MOVE_CARD_FAILURE,
      payload: error
    }
}

export const addCard = (name, listId) => {
  return (dispatch) => {
    dispatch(addCardRequest());
    let payload = {"name" : name, "listId" : listId};
    axios
      .post('http://localhost:3001/api/v1/cards', payload)
      .then((response) => {
        dispatch(addCardSuccess({...response.data, "listId" : listId}))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(addCardFailure(error.message))
      })
  }
}

export const addCardRequest = () => {
    console.log("Sending Add card request");
  return {
    type: ADD_CARD_REQUEST
  }
}

export const addCardSuccess = data => {
  return {
    type: ADD_CARD_SUCCESS,
    payload: data
  }
}

export const addCardFailure = error => {
  console.log("Add card failed, error: " + error);
  return {
    type: ADD_CARD_FAILURE,
    payload: error
  }
}