
import { DomainEvent } from "src/contexts/shared/domain/domain-event";

export class NotCreatedPostDomainEvent extends DomainEvent {

    static override readonly EVENT_NAME: string = 'post.not_created';

    constructor(
        params
            : {
                eventId?: string,
                occurredOn?: Date,
                attributes?: any,
            }
    ) {
        super(
            {
                eventName: NotCreatedPostDomainEvent.EVENT_NAME,
                eventId: params.eventId,
                occurredOn: params.occurredOn,
                attributes: params.attributes,
            }
        );
    }

}
