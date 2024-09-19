import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrl: './page-edit-order.component.scss'
})
export class PageEditOrderComponent {
  private activatedRoute = inject(ActivatedRoute);
  item!: Order;

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.ordersService.getById(params['id']).subscribe((order) => {
        this.item = new Order({...order});
      });
    })
  }

  handleSubmit(item: Order) {
    this.ordersService.update(item).subscribe(()=>{
      this.router.navigateByUrl("orders");
    })
  }
}