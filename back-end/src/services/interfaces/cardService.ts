import { ICard } from "./../../model/card";

export interface ICardService {
    createCard(name: string, listId:string) : Promise<ICard>;
    moveCard(cardId:string, listId: string) : Promise<boolean>;
    deleteCard(id: string): Promise<boolean>;
}