import boardReducer from "./boardReducer";

describe("Board reducer test suite", () => {
  const initialState = {
    loading: true,
    board: {},
    error: ''
  };

  it("should return the initial state when no action is invoked", () => {
    const newState = boardReducer(undefined, {});

    expect(newState).toEqual(initialState);
  });

  it("should set loading to true when FETCH_BOARD_REQUEST is invoked", () => {
    const newState = boardReducer(initialState, { type: "FETCH_BOARD_REQUEST" });

    expect(newState).toEqual({
        loading: true,
        board: {},
        error: ''
      });
  });

  it("should set board in the store when FETCH_BOARD_SUCCESS is invoked", () => {
    const newState = boardReducer(boardReducer, {
      type: "FETCH_BOARD_SUCCESS",
      payload: {
        lists: []
      }
    });

    expect(newState).toEqual({
      board: { lists: []},
      loading: false,
      error: ''
    });
  });
});
