import { ICard } from "./card";

export interface IList {
    id: string;
    name : string;
    cards : ICard[]
}