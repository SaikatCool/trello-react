import { IBoard } from "./../../model/board";

export interface IBoardService {
    getBoard() : Promise<IBoard>;
}