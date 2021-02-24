import axios from 'axios'
import {
  FETCH_BOARD_REQUEST,
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_FAILURE
} from './types'

export const fetchBoard = () => {
  return (dispatch) => {
    dispatch(fetchBoardRequest())
    axios
      .get('http://localhost:3001/api/v1/board')
      .then(response => {
        // response.data is the board
        const board = response.data;
        dispatch(fetchBoardSuccess(board))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchBoardFailure(error.message))
      })
  }
}

export const fetchBoardRequest = () => {
  return {
    type: FETCH_BOARD_REQUEST
  }
}

export const fetchBoardSuccess = board => {
  return {
    type: FETCH_BOARD_SUCCESS,
    payload: board
  }
}

export const fetchBoardFailure = error => {
  return {
    type: FETCH_BOARD_FAILURE,
    payload: error
  }
}