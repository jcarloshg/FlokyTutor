export interface MessageErro {
    error: string,
    message: string,
}

export interface CustomValidator {
    pattern: string;
    messagesError: MessageErro[],
    getMessageError(objErrors: object): string | null,
}