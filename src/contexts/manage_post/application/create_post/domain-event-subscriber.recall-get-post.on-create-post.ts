// event
import { DomainEventSubscriber } from "src/contexts/shared/domain/event-bus";
import { CreatePostDomainEvent } from "../../domain/create_post/domain-event.create-post";
import { DomainEventClass } from "src/contexts/shared/domain/domain-event";
// eje
import { GetPostsRepository } from "../../domain/domain_view_post/get-post.repository";

export class RecallGetPostOnCreatePost implements DomainEventSubscriber<CreatePostDomainEvent> {

    constructor(private getPostsRepository: GetPostsRepository) { }

    subscribedTo(): DomainEventClass[] {
        return [CreatePostDomainEvent];
    }

    async on(domainEvent: CreatePostDomainEvent): Promise<void> {
        await this.getPostsRepository.run();
    }

}