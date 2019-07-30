import { Component, Input } from '@angular/core';
import { Order } from '../../models';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html'
})
export class OrderHistoryComponent {
  @Input() order: Order;
}