import { DomainEvent } from "src/contexts/shared/domain/domain-event";
import { Comment as CommentAWS } from "src/contexts/shared/domain/models";

export class CreateCommentDomainEvent extends DomainEvent {

    static override readonly EVENT_NAME: string = 'post.commented';

    constructor(
        params: {
            eventId?: string,
            occurredOn?: Date,
            attributes?: CommentAWS,
        }
    ) {
        super(
            {
                eventName: CreateCommentDomainEvent.EVENT_NAME,
                eventId: params.eventId,
                occurredOn: params.occurredOn,
                attributes: params.attributes,
            }
        )
    }

}