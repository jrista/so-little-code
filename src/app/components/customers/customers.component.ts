import { Component } from '@angular/core';
import { CustomerFacade } from '../../facades/customer.facade';

@Component({
  selector: 'app-customers', 
  templateUrl: './customers.component.html' 
})
export class CustomersComponent {
  constructor(public customers: CustomerFacade) {
    customers.loadAll();
  }
}