import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { StateOrder } from '../../core/enums/state-order';
import { Order } from '../../core/models/order';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  collection$!: Observable<Order[]>;
  private static API_URL = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${OrdersService.API_URL}/orders`).pipe(
      map((data) => {
        return data.map((obj) => new Order(obj));
      })
    );
  }

  public get collection() {
    return this.collection$;
  }

  public set collection(collection: Observable<Order[]>) {
    this.collection$ = collection;
  }

  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${OrdersService.API_URL}/orders`, item);
  }

  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${OrdersService.API_URL}/orders/${item.id}`, item);
  }

  public changeStatus(item: Order, status: StateOrder): Observable<Order> {
    const obj = new Order({ ...item });
    obj.state = status;
    return this.update(obj);
  }
}
