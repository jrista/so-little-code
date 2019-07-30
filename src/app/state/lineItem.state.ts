import { buildState, IEntityState } from '@briebug/ngrx-auto-entity';
import { LineItem } from '../models';

export const { initialState, facade: LineItemFacadeBase } = buildState(LineItem);
export const lineItemReducer = (state = initialState): IEntityState<LineItem> => state; 