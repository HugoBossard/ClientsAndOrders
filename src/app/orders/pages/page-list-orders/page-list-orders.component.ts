import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StateOrder } from '../../../core/enums/state-order';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss'
})
export class PageListOrdersComponent {
  headers: string[] = [
    'Actions',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State'
  ];

  states: String[] = Object.values(StateOrder);
  orders!: Order[];

  private ordersService: OrdersService = inject(OrdersService);
  private router: Router = inject(Router);

  ngOnInit() {
    this.ordersService.collection.subscribe((orders) => {
      this.orders = orders;
    });
  }

  changeStatus(item: Order, $event: any) {
    const status = $event.target.value;

    this.ordersService.changeStatus(item, status).subscribe((data) => {
      Object.assign(item, data);
    });
  }

  editOrder(item: Order) {
    // this.router.navigate("orders/edit/id")
    this.router.navigate(["orders", "edit", item.id]);
  }

  deleteOrderById(itemId: number) {
    let userWantToDelete = confirm("Êtes-vous sûr de supprimer cet élément ?");

    if (!userWantToDelete) {
      return;
    }
    
    this.ordersService.deleteById(itemId).subscribe();
  }
}