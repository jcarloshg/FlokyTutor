
export abstract class DomainEvent {

    static EVENT_NAME: string;

    readonly eventName: string;
    readonly eventId?: string;
    readonly occurredOn?: Date;

    constructor(
        params: {
            eventName: string,
            eventId?: string,
            occurredOn?: Date
        }
    ) {
        this.eventId = params.eventId || 'TODO_ADD_UUID';
        this.eventName = params.eventName;
        this.occurredOn = params.occurredOn || new Date();
    }
}