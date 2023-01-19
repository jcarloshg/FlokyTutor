
import { DomainEvent } from "src/contexts/shared/domain/domain-event";

export class CreatePostDomainEvent extends DomainEvent {

    static override readonly EVENT_NAME: string = 'post.created';

    constructor({ eventId, occurredOn }: { eventId?: string, occurredOn?: Date }) {
        super({ eventName: CreatePostDomainEvent.EVENT_NAME, eventId: eventId, occurredOn: occurredOn, });
    }

}
