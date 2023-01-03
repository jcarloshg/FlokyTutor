export interface ConfirmationModal {
    title: string,
    message: string,
    functionAccept?(): void,
    functionCancel?(): void,
}