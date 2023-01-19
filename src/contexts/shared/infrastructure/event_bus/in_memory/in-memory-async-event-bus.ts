import { EventEmitter } from 'events';
import { DomainEventSubscriber, EventBus } from 'src/contexts/shared/domain/event-bus';
import { DomainEvent } from '../../../domain/domain-event';

export class InMemoryAsyncEventBus extends EventEmitter implements EventBus {

    async publish(events: DomainEvent[]): Promise<void> {
        events.map((event) => {
            console.log('...publish...', event.eventName);
            this.emit(event.eventName, event);
        });
    }

    addSubscribers(subscribers: DomainEventSubscriber<any>[]) {
        subscribers.forEach(subscriber => {

            const domainEvents = subscriber.subscribedTo();

            domainEvents.forEach(

                event => {
                    this.on(
                        event.EVENT_NAME,
                        subscriber.on.bind(subscriber)
                    )
                }

            )
        });
        // subscribers.items.forEach(subscriber => {
        //   subscriber.subscribedTo().forEach(event => {
        //     this.on(event.EVENT_NAME, subscriber.on.bind(subscriber));
        //   });
        // });
    }

}
