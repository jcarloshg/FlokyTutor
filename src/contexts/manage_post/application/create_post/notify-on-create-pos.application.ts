import { DomainEventSubscriber } from "src/contexts/shared/domain/event-bus";
import { CreatePostDomainEvent } from "../../domain/domain_create_post/create-post.domain-event";
import { DomainEventClass } from "src/contexts/shared/domain/domain-event";

export interface Notify {
    run(message: string): Promise<void>,
}

export class NotifyOnCreatePost implements DomainEventSubscriber<CreatePostDomainEvent> {

    constructor(private notify: Notify) { }

    subscribedTo(): DomainEventClass[] {
        return [CreatePostDomainEvent];
    }

    async on(domainEvent: CreatePostDomainEvent): Promise<void> {
        await this.notify.run('Curso creado');
    }

}