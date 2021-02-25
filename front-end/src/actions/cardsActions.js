import axios from 'axios'
import {
  MOVE_CARD_REQUEST,
  MOVE_CARD_SUCCESS,
  MOVE_CARD_FAILURE
} from './types'

export const moveCard = (cardId, destinationListId) => {
    return (dispatch) => {
      dispatch(moveCardRequest());
      let payload = {"id" : cardId, "listId" : destinationListId};
      console.log(payload);
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