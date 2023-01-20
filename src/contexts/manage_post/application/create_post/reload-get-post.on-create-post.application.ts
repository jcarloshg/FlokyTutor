// event
import { DomainEventSubscriber } from "src/contexts/shared/domain/event-bus";
import { CreatePostDomainEvent } from "../../domain/domain_create_post/create-post.domain-event";
import { DomainEventClass } from "src/contexts/shared/domain/domain-event";
// eje
import { GetPostsRepository } from "../../domain/domain_view_post/get-post.repository";

export class ReloadGetPostOnCreatePost implements DomainEventSubscriber<CreatePostDomainEvent> {

    constructor(private getPostsRepository: GetPostsRepository) { }

    subscribedTo(): DomainEventClass[] {
        return [CreatePostDomainEvent];
    }

    async on(domainEvent: CreatePostDomainEvent): Promise<void> {
        await this.getPostsRepository.run();
    }

}