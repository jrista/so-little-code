import { EventEmitter, Component, Input, Output } from '@angular/core';
import { Customer } from '../../models';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent {
  @Input() customer: Customer;
  @Output() closed = new EventEmitter();
}