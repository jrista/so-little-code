import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { CustomerFacadeBase } from "../state/customer.state";
import { IAppState } from "../state/app.state";
import { Customer } from "../models";

@Injectable({providedIn: 'root'})
export class CustomerFacade extends CustomerFacadeBase {
    constructor(store: Store<IAppState>) {
        super(Customer, store);
    }
}