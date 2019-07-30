import { Order, OrderStatus, Never } from '../models';

export const orderRecords: Order[] = [
  { 
    id: 1, 
    purchaseOrderNo: '123ABC', 
    status: OrderStatus.PENDING, 
    dateCreated: '2019-07-29 11:47:13',
    dateClosed: 'never'
  },
  { 
    id: 2, 
    purchaseOrderNo: '456DEF', 
    status: OrderStatus.CLOSED, 
    dateCreated: '2019-07-27 09:14:27', 
    dateClosed: '2019-07-29 10:34:19', 
    history: [ 
      { dateOfAction: '2019-07-28 14:44:38', action: 'Order Filled', newStatus: OrderStatus.FILLED },
      { dateOfAction: '2019-07-28 15:13:11', action: 'Order Shipped', newStatus: OrderStatus.SHIPPED },
      { dateOfAction: '2019-07-29 10:34:19', action: 'Close Order', newStatus: OrderStatus.CLOSED }
    ]
  },
  { 
    id: 3, 
    purchaseOrderNo: '789GHI', 
    status: OrderStatus.FILLED, 
    dateCreated: '2019-07-24 11:47:13', 
    dateClosed: 'never',
    history: [ 
      { dateOfAction: '2019-07-26 09:25:25', action: 'Order Filled', newStatus: OrderStatus.FILLED },
    ]
  },
];