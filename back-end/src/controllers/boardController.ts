import { inject } from "inversify";
import { controller, httpGet, interfaces } from "inversify-express-utils";
import { SERVICE_IDENTIFIER } from "./../config/identifiers";
import { IBoard } from "./../model/board";
import { IBoardService } from "./../services/interfaces/boardService";
import express from 'express';
import { config } from "./../config/config";

@controller("/api/v1")
export class BoardController implements interfaces.Controller {

    @inject(SERVICE_IDENTIFIER.IBoardService) private boardService: IBoardService;

    @httpGet("/board")
    private async getBoard(req: express.Request, res: express.Response){
        const board:IBoard = await this.boardService.getBoard();
        res.status(config.HTTP_OK).send(board);
    }
};