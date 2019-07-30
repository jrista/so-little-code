import { EventEmitter, Component, Input, Output } from '@angular/core';
import { Order, LineItem } from '../../models';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent {
  @Input() order: Order;
  @Input() lineItems: LineItem[];
  @Output() closed = new EventEmitter();
}