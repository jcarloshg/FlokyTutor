
export abstract class DomainEvent<T> {

    static EVENT_NAME: string;

    readonly eventName: string;
    readonly eventId?: string;
    readonly occurredOn?: Date;
    readonly data?: T;

    constructor(
        params: { eventName: string, eventId?: string, occurredOn?: Date, data?: T }
    ) {
        this.eventId = params.eventId || 'TODO_ADD_UUID';
        this.eventName = params.eventName;
        this.occurredOn = params.occurredOn || new Date();
        this.data = params.data;
    }

}

export type DomainEventClass = {
    EVENT_NAME: string;
};

type DomainEventAttributes = any;
