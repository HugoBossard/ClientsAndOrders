import { StateOrder } from "../enums/state-order";

export interface OrderI {
    id: number;
    tjmHt: number;
    nbJours: number;
    tva: number;
    state: StateOrder;
    typePresta: string;
    client: string;
    comment: string;
    totalHT(): number;
    totalTTC(): number;
}