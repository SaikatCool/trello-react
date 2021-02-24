import axios, { AxiosRequestConfig } from "axios";
import { injectable } from "inversify";
import { IBoard } from "./../../model/board";
import { IBoardService } from "./../interfaces/boardService";
import { config } from "./../../config/config";
import { IList } from "./../../model/list";
import { ICard } from "src/model/card";


@injectable()
export class TrelloBoardService implements IBoardService {
    public async getBoard(): Promise<IBoard> {
        let board: IBoard = {
            lists: []
        };
        const axiosConfig: AxiosRequestConfig = {
            method: "get",
            url: config.TRELLO_BASE_URL + config.GET_BOARD_ENDPOINT,
            params : {
                key: process.env.key,
                token: process.env.token,
                cards: "all"
            }
        };

        try{
            const response = await axios(axiosConfig);
            const lists: any[] = response.data;
            lists.forEach((listElement) => {
                let list: IList = {
                    id : listElement.id,
                    name : listElement.name,
                    cards: []
                };
                let cards: any[] = listElement.cards;
                cards.forEach((cardElement: any) => {
                    let card: ICard = {
                        id : cardElement.id,
                        name : cardElement.name
                    };
                    list.cards.push(card);
                });
                board.lists.push(list);
            });
        }
        catch (err){
            console.log(err);
        }
        return board;
    }

}