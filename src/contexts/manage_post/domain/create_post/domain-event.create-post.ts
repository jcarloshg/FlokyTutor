
import { DomainEvent } from "src/contexts/shared/domain/domain-event";
import { Post as PostAWS } from 'src/contexts/shared/domain/models';

export class CreatePostDomainEvent extends DomainEvent {

    static override readonly EVENT_NAME: string = 'post.created';

    constructor(
        params
            : {
                eventId?: string,
                occurredOn?: Date,
                attributes?: PostAWS,
            }
    ) {
        super(
            {
                eventName: CreatePostDomainEvent.EVENT_NAME,
                eventId: params.eventId,
                occurredOn: params.occurredOn,
                attributes: params.attributes,
            }
        );
    }

}
