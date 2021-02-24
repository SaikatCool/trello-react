import {
    FETCH_BOARD_REQUEST,
    FETCH_BOARD_SUCCESS,
    FETCH_BOARD_FAILURE
  } from './../actions/types'
  
  const initialState = {
    loading: true,
    board: {},
    error: ''
  }
  
  const boardReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BOARD_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_BOARD_SUCCESS:
        return {
          loading: false,
          board: action.payload,
          error: ''
        };
      case FETCH_BOARD_FAILURE:
        return {
          loading: false,
          board: {},
          error: action.payload
        };
      default: return state;
    }
  }
  
  export default boardReducer;