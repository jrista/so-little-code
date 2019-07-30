import { Key } from "@briebug/ngrx-auto-entity";

export enum OrderStatus {
    PENDING = 'pending',
    ONHOLD = 'on-hold',
    PARTIAL = 'partial-fill',
    FILLED = 'filled',
    PARTSHIP = 'partial-shipped',
    SHIPPED = 'shipped',
    CLOSED = 'closed'
}

export type ISODate = string;
export type Never = 'never';

export class Order {
    @Key id?: number;
    purchaseOrderNo: string;
    status: OrderStatus;
    dateCreated: ISODate;
    dateClosed: ISODate | Never;
    history?: OrderHistory[];
}

export interface OrderHistory {
    dateOfAction: ISODate;
    action: string;
    newStatus: OrderStatus;
}