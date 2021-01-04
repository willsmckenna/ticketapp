import { Subjects, Publisher, OrderCancelledEvent } from '@wmtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}