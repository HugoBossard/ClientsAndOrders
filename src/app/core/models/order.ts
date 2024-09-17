import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI {
  id!: number;
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;

  constructor(orderObj?: Partial<Order>) {
    if (orderObj) {
        // Merge le contenu de orderObj dans l'objet courant.
        // Il prend en compte les données non modifiées également.
        Object.assign(this, orderObj);
    }
  }
  
  totalHT(): number {
    return this.tjmHt * this.nbJours;
  }

  totalTTC(): number {
    return this.totalHT() * (1 + this.tva / 100);
  }
}