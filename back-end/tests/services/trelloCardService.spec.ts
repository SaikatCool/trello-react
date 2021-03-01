import "reflect-metadata";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ICard } from "./../../src/model/card";
import { config } from "./../../src/config/config";
import {TrelloCardService}  from  "./../../src/services/implementation/trelloCardService";

describe("TrelloBoardService test suite", () => {
    let mock = new MockAdapter(axios);

    let urlCard: string = config.TRELLO_BASE_URL + config.CARD_ENDPOINT;
    let mockData: any =  { "name": "Test", "id": 1};
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

      it("Should return ICard when Trello API is succesful while adding a card", async (done) => {
        // Arrange
        let service: TrelloCardService = new TrelloCardService();
        mock.onPost(urlCard).reply(config.HTTP_OK, mockData);
    
        // Act
        const result: ICard = await service.createCard("Test", "1")
    
        // Assert
        expect(result).toBeDefined();
        expect(result.name).toEqual("Test");
        done();
      });

      it("Should throw error when Trello API returns error", async (done) => {
        // Arrange
        let service: TrelloCardService = new TrelloCardService();
        mock.onPost(urlCard).reply(500);
    
        // Act
        try{
            await service.createCard("Test", "1")
        } catch (err) {
    
            // Assert
            expect(err).toBeDefined();
            done();
        }
      });

    });