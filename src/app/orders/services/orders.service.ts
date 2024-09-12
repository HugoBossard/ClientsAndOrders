import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../core/models/order';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  collection$!: Observable<Order[]>;
  private static API_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { 
    this.collection$ = this.httpClient.get<Order[]>(`${OrdersService.API_URL}/orders`);
  }
}
