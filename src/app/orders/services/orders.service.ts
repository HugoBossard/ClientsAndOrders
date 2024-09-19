import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { StateOrder } from '../../core/enums/state-order';
import { Order } from '../../core/models/order';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  private static API_URL = environment.urlApi;

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  // refresh collection
  public refreshCollection(): void {
    this.http.get<Order[]>(`${OrdersService.API_URL}/orders`)
      .pipe(
        map((orders) => {
          return orders.map((order) => new Order(order));
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public get collection() {
    return this.collection$;
  }

  public getById(itemId: number): Observable<Order> {
    return this.http.get<Order>(`${OrdersService.API_URL}/orders/${itemId}`);
  }

  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${OrdersService.API_URL}/orders`, item).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${OrdersService.API_URL}/orders/${item.id}`, item).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public deleteById(itemId: Number): Observable<any> {
    return this.http.delete<any>(`${OrdersService.API_URL}/orders/${itemId}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public changeStatus(item: Order, status: StateOrder): Observable<Order> {
    const obj = new Order({ ...item });
    obj.state = status;
    return this.update(obj);
  }
}
