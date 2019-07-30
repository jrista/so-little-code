import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { OrderFacadeBase } from "../state/order.state";
import { IAppState } from "../state/app.state";
import { Order } from "../models";

@Injectable({providedIn: 'root'})
export class OrderFacade extends OrderFacadeBase {
    constructor(store: Store<IAppState>) {
        super(Order, store);
    }
}