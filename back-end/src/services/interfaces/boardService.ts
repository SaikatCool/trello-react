import { IBoard } from "src/model/board";

export interface IBoardService {
    getBoard() : Promise<IBoard>;
}