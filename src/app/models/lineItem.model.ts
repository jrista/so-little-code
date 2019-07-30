import { Key } from "@briebug/ngrx-auto-entity";

export class LineItem {
    @Key orderId: number;
    @Key productId: number;
    quantity: number;
    isRush: boolean;
}