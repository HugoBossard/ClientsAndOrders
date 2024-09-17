import { StateClient } from "../enums/state-client";

export interface ClientI {
    id: number,
    name: String,
    tva: number,
    totalCaHt: number,
    state: StateClient,
    comment: string,
}