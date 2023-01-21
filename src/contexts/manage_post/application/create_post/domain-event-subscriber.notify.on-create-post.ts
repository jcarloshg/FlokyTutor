import { DomainEventSubscriber } from "src/contexts/shared/domain/event-bus";
import { CreatePostDomainEvent } from "../../domain/create_post/domain-event.create-post";
import { DomainEventClass } from "src/contexts/shared/domain/domain-event";
import { Post as PostAWS } from "src/contexts/shared/domain/models";
import { LaunchToastUserInterface } from "src/contexts/shared/domain/user-interface.launch-toast";


export class LaunchToastToSuccessCreatedPost implements DomainEventSubscriber<CreatePostDomainEvent> {

    constructor(private notify: LaunchToastUserInterface) { }

    subscribedTo(): DomainEventClass[] {
        return [CreatePostDomainEvent];
    }

    async on(domainEvent: CreatePostDomainEvent): Promise<void> {
        const postCreated = domainEvent.attributes as PostAWS;
        const message = `La publicación "${postCreated.title}" se a creado con éxito!`;
        await this.notify.run({ message: message, typeToast: "success" });
    }

}