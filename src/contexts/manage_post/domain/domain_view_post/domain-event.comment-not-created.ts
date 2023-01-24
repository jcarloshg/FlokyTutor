import { DomainEvent } from "src/contexts/shared/domain/domain-event";
import { InputCommentPost } from "./comment-post.input";

export class CommentNotCreatedDomainEvent extends DomainEvent {

    static override readonly EVENT_NAME: string = 'post.commented';

    constructor(
        params: {
            eventId?: string,
            occurredOn?: Date,
            attributes?: InputCommentPost,
        }
    ) {
        super(
            {
                eventName: CommentNotCreatedDomainEvent.EVENT_NAME,
                eventId: params.eventId,
                occurredOn: params.occurredOn,
                attributes: params.attributes,
            }
        )
    }

}