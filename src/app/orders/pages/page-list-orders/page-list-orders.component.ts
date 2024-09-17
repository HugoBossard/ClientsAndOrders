import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss'
})
export class PageListOrdersComponent {
  title = "Je suis le titre passer en paramètre";
  headers: string[] = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State'
  ];

  status: String[] = [
    "CANCELED",
    "OPTION",
    "CONFIRMED"
  ];

  orders$!: Observable<Order[]>;

  constructor(private ordersService: OrdersService) {
    this.orders$ = this.ordersService.collection;
  }

  changeStatus(item: Order, $event: any) {
    const status = $event.target.value;

    this.ordersService.changeStatus(item, status).subscribe((data) => {
      Object.assign(item, data);
    });
  }
}