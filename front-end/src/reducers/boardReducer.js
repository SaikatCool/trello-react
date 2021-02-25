import {
    FETCH_BOARD_REQUEST,
    FETCH_BOARD_SUCCESS,
    FETCH_BOARD_FAILURE,
    MOVE_CARD_REQUEST,
    MOVE_CARD_FAILURE,
    MOVE_CARD_SUCCESS
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
       case MOVE_CARD_REQUEST:
           return state;
        case MOVE_CARD_FAILURE:
            return state;
        case MOVE_CARD_SUCCESS:
            {
                let newBoard = Object.assign({}, state.board);;               
                let sourceList = newBoard.lists.find((list) => list.name == "To Do");
                let card = sourceList.cards.find(card => card.id == action.payload.id)
                let index = sourceList.cards.indexOf(card);
                sourceList.cards.splice(index, 1);
                let destinationList = newBoard.lists.find((list) => 
                  list.name == "Done");
                destinationList.cards.push(card);

                return {...state, board : newBoard}
            }
      default: return state;
    }
  }
  
  export default boardReducer;