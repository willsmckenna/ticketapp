import { Publisher, Subjects, TicketCreatedEvent } from '@wmtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;          
}