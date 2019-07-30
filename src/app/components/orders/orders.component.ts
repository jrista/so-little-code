import { Component } from '@angular/core';
import { LineItemFacade, OrderFacade } from '../../facades';

@Component({
  selector: 'app-orders', 
  templateUrl: './orders.component.html' 
})
export class OrdersComponent {
  constructor(public orders: OrderFacade, public lineItems: LineItemFacade) {
    orders.loadAll();
  }
}