import "reflect-metadata";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { IBoard } from "./../../src/model/board";
import { config } from "./../../src/config/config";
import {TrelloBoardService}  from  "./../../src/services/implementation/trelloBoardService";

describe("TrelloBoardService test suite", () => {
    let mock = new MockAdapter(axios);

    let urlToHit: string = config.TRELLO_BASE_URL + config.GET_BOARD_ENDPOINT;
    let mockData: any =  [{ "id" : 1, "name": "Test", "cards": []}];
    let expectedData: any =  { "lists": [{"id" : 1, "name": "Test", "cards": []}]};


    beforeEach(() => {
        mock = new MockAdapter(axios);
      });
    
      afterEach(() => {
          mock.reset();
      });
    
      afterAll(() => {
        mock.reset();
      });

      it("Should return IBoard when Trello API returns valid response", async (done) => {
        // Arrange
        let service: TrelloBoardService = new TrelloBoardService();
        mock.onGet(urlToHit).reply(config.HTTP_OK, mockData);
    
        // Act
        const result: IBoard = await service.getBoard();
    
        // Assert
        expect(result).toBeDefined();
        expect(result).toEqual(expectedData);
        done();
      });

      it("Should return IBoard when Trello API returns error", async (done) => {
        // Arrange
        let service: TrelloBoardService = new TrelloBoardService();
        mock.onGet(urlToHit).reply(500);
    
        // Act
        const result: IBoard = await service.getBoard();
    
        // Assert
        expect(result).toBeDefined();
        expect(result).toEqual({"lists": []});
        done();
      });
    
});