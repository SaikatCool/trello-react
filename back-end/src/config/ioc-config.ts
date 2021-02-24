import { Container } from "inversify";
import { TrelloCardService } from "./../services/implementation/trelloCardService";
import { ICardService } from "./../services/interfaces/cardService";
import { BoardController } from "./../controllers/boardController";
import { CardController } from "./../controllers/cardController";
import { TrelloBoardService } from "./../services/implementation/TrelloBoardService";
import { IBoardService } from "./../services/interfaces/boardService";
import { SERVICE_IDENTIFIER } from "./identifiers";

const IOC_CONTAINER = new Container();

IOC_CONTAINER.bind<IBoardService>(SERVICE_IDENTIFIER.IBoardService).to(TrelloBoardService);
IOC_CONTAINER.bind<ICardService>(SERVICE_IDENTIFIER.ICardService).to(TrelloCardService);


IOC_CONTAINER.bind<BoardController>(SERVICE_IDENTIFIER.BoardController).to(BoardController);
IOC_CONTAINER.bind<CardController>(SERVICE_IDENTIFIER.CardController).to(CardController);

export { IOC_CONTAINER }; 