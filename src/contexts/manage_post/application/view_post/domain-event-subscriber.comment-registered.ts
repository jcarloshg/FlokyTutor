import { DomainEventSubscriber } from "src/contexts/shared/domain/event-bus";
import { CreatePostDomainEvent } from "../../domain/create_post/domain-event.create-post";
import { DomainEventClass } from "src/contexts/shared/domain/domain-event";
import { GetCommentsFromPostByIDRepository } from "../../domain/domain_view_post/get-comments-from-post-by-iD.repository";
import { CreateCommentDomainEvent } from "../../domain/domain_view_post/domain-event.create-comment";
import { Comment } from "src/contexts/shared/domain/models";

export class RecallGetCommentsSubscriber implements DomainEventSubscriber<CreatePostDomainEvent> {

    constructor(private getCommentsFromPostByIDRepository: GetCommentsFromPostByIDRepository) { }

    subscribedTo(): DomainEventClass[] {
        return [CreateCommentDomainEvent];
    }

    async on(domainEvent: CreatePostDomainEvent): Promise<void> {
        const commentCreated = domainEvent.attributes as Comment;
        const postID = commentCreated.postID;
        await this.getCommentsFromPostByIDRepository.run(postID);
    }

}