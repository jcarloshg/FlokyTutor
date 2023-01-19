import { EventEmitter } from 'events';
import { EventBus } from 'src/contexts/shared/domain/event-bus';
import { DomainEvent } from '../../../domain/domain-event';

export class InMemoryAsyncEventBus extends EventEmitter implements EventBus {

    async publish(events: DomainEvent[]): Promise<void> {
        events.map((event) => {
            console.log('====================================');
            console.log('[InMemoryAsyncEventBus]', event.eventName);
            console.log({ ...event });
            console.log('====================================');
            this.emit(event.eventName, event);
        });
    }

    //   addSubscribers(subscribers: DomainEventSubscribers) {
    //     // subscribers.items.forEach(subscriber => {
    //     //   subscriber.subscribedTo().forEach(event => {
    //     //     this.on(event.EVENT_NAME, subscriber.on.bind(subscriber));
    //     //   });
    //     // });
    //   }

}
