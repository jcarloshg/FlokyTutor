import { DomainEventSubscriber } from "src/contexts/shared/domain/event-bus";
import { CreatePostDomainEvent } from "../../domain/create_post/domain-event.create-post";
import { DomainEventClass } from "src/contexts/shared/domain/domain-event";
import { CreateCommentDomainEvent } from "../../domain/domain_view_post/domain-event.create-comment";
import { Comment } from "src/contexts/shared/domain/models";
import { LaunchToastUserInterface } from "src/contexts/shared/domain/user-interface.launch-toast";

export class NotifyCommentRegisteredSubscriber implements DomainEventSubscriber<CreatePostDomainEvent> {

    constructor(private notify: LaunchToastUserInterface) { }

    subscribedTo(): DomainEventClass[] {
        return [CreateCommentDomainEvent];
    }

    async on(domainEvent: CreatePostDomainEvent): Promise<void> {
        const commentCreated = domainEvent.attributes as Comment;
        const commentBodySmall_50Characters = commentCreated.body.slice(0, 50);
        const message = `El comentario "${commentBodySmall_50Characters}" se a creado con éxito! :)`;
        await this.notify.run({ message: message, typeToast: "success" });
    }

}