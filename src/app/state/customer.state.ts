import { buildState, IEntityState } from '@briebug/ngrx-auto-entity';
import { Customer } from '../models';

export const { initialState, facade: CustomerFacadeBase } = buildState(Customer);
export const customerReducer = (state = initialState): IEntityState<Customer> => state; 