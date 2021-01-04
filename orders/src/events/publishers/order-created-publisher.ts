import { Publisher, OrderCreatedEvent, Subjects } from '@wmtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}

