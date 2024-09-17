import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
    id!: number;
    name!: String;
    tva = 20;
    totalCaHt = 200;
    state = StateClient.ACTIVE;
    comment!: string;

    constructor(clientObj?: Partial<Client>) {
        if (clientObj) {
            Object.assign(this, clientObj);
        }
    }
}