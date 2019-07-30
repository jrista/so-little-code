import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { IAppState } from "../state/app.state";
import { LineItem, Order } from "../models";
import { LineItemFacadeBase } from "../state/lineItem.state";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class LineItemFacade extends LineItemFacadeBase {
    constructor(store: Store<IAppState>) {
        super(LineItem, store);
    }

    byOrder$(order: Order): Observable<LineItem[]> {
        return this.all$.pipe(map(lineItems => lineItems.orderId === order.id));
    }

    loadByOrder(order: Order): void {
        this.loadMany({ orderId: order.id});
    }
}