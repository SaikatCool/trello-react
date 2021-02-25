import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addCard } from "./cardsActions";

const mockStore = configureMockStore([thunk]);

describe("Card Actions Tests", () => {
    let store;
  
    beforeEach(() => {
      store = mockStore({
        board: {}
      });
    });
  
    describe("addCard action creator", () => {
      it("dispatches addCard action and returns data on success", async () => {
        mockAxios.post.mockImplementationOnce(() =>
          Promise.resolve({
            "name": "Test",
            "id": "1234"
        })
        );
  
        await store.dispatch(addCard("Test", 1));
        const actions = store.getActions();
  
        expect.assertions(2);
        expect(actions[0].type).toEqual("ADD_CARD_REQUEST");
        expect(actions[1].type).toEqual("ADD_CARD_SUCCESS");
      });
  
      it("tests addCard action and that returns an error", async () => {
        mockAxios.post.mockImplementationOnce(() =>
          Promise.reject({
            error: "Something bad happened :("
          })
        );
        
        try { 
          await store.dispatch(addCard("Test", 1));
        } catch {
          const actions = store.getActions();
  
          expect.assertions(3);
          expect(actions[0].type).toEqual("ADD_CARD_REQUEST");
          expect(actions[1].type).toEqual("ADD_CARD_FAILURE");
          expect(actions[1].payload.error).toEqual("Something bad happened :(");
        }
      });
    });
  });
  