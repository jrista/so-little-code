import { EventEmitter, Component, Input, Output } from '@angular/core';
import { Order } from '../../models';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent {
  @Input() orders: Order[];
  @Output() selected = new EventEmitter<Order>();
  @Output() deleted = new EventEmitter<Order>();
}