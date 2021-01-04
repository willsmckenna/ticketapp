import { Subjects, Publisher, ExpirationCompleteEvent } from '@wmtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}