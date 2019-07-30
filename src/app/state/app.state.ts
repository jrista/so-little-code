import { ActionReducerMap } from '@ngrx/store';
import { customerReducer } from './customer.state';
import { lineItemReducer } from './lineItem.state';
import { orderReducer } from './order.state';
import { Customer, LineItem, Order } from '../models';
import { IEntityState } from '@briebug/ngrx-auto-entity';

export interface IAppState {
  customer: IEntityState<Customer>;
  lineItem: IEntityState<LineItem>;
  order: IEntityState<Order>;
}

export const appReducer: ActionReducerMap<IAppState> = {
  customer: customerReducer,
  lineItem: lineItemReducer,
  order: orderReducer,
};