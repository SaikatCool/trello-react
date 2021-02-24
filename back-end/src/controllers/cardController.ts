import { inject } from "inversify";
import { controller, httpPost, httpPut, interfaces } from "inversify-express-utils";
import { SERVICE_IDENTIFIER } from "./../config/identifiers";
import { ICardService } from "./../services/interfaces/cardService";
import express from 'express';
import { ICard } from "./../model/card";
import { config } from "./../config/config";

@controller("/api/v1")
export class CardController implements interfaces.Controller {

    @inject(SERVICE_IDENTIFIER.ICardService) private cardService: ICardService;

    @httpPost("/cards")
    private async createCard(req: express.Request, res: express.Response){
        const card:ICard =  await this.cardService.createCard(req.body.name, req.body.listId);
        res.status(config.HTTP_CREATED).send(card);
    }

    @httpPut("/cards")
    private async moveCard(req: express.Request, res: express.Response){
        await this.cardService.moveCard(req.body.id, req.body.listId);
        res.status(config.HTTP_OK).send();
    }
};