
export abstract class DomainEvent {

    static EVENT_NAME: string;

    readonly eventName: string;
    readonly eventId?: string;
    readonly occurredOn?: Date;
    readonly attributes?: any;

    constructor(
        params:
            {
                eventName: string,
                eventId?: string,
                occurredOn?: Date,
                attributes?: any;
            }
    ) {
        this.eventId = params.eventId || 'TODO_ADD_UUID';
        this.eventName = params.eventName;
        this.occurredOn = params.occurredOn || new Date();
        this.attributes = params.attributes
    }

}

export type DomainEventClass = {
    EVENT_NAME: string;
};

type DomainEventAttributes = any;
