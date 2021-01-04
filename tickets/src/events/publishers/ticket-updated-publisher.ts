import { Publisher, Subjects, TicketUpdatedEvent } from '@wmtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;          
}