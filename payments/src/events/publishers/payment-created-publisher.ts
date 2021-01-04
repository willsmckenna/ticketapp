import { Subjects, Publisher, PaymentCreatedEvent } from '@wmtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent>{
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}