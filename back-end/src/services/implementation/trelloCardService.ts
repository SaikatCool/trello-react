import { ICard } from "./../../model/card";
import { ICardService } from "../interfaces/cardService";
import axios, { AxiosRequestConfig } from "axios";
import { config } from "./../../config/config";
import { injectable } from "inversify";

@injectable()
export class TrelloCardService implements ICardService {
    public async moveCard(cardId: string, listId: string): Promise<boolean> {
        const axiosConfig: AxiosRequestConfig = {
            method: "put",
            url: config.TRELLO_BASE_URL + config.CARD_ENDPOINT + "/" + cardId,
            params : {
                key: process.env.key,
                token: process.env.token,
                idList: listId
            }
        };

        try{
            const response = await axios(axiosConfig);
            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    }
    deleteCard(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public async createCard(name: string, listId: string): Promise<ICard> {
        let card: ICard = { name: "", id: ""};
        const axiosConfig: AxiosRequestConfig = {
            method: "post",
            url: config.TRELLO_BASE_URL + config.CARD_ENDPOINT,
            params : {
                key: process.env.key,
                token: process.env.token,
                name: name,
                idList: listId
            }
        };

        try{
            const response = await axios(axiosConfig);
            card.id = response.data.id;
            card.name = response.data.name;
        } catch(err){
            console.log(err);
        }
        return card;
    }

}