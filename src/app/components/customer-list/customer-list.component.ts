import { EventEmitter, Component, Input, Output } from '@angular/core';
import { Customer } from '../../models';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {
  @Input() customers: Customer[];
  @Output() selected = new EventEmitter<Customer>();
  @Output() deleted = new EventEmitter<Customer>();
}