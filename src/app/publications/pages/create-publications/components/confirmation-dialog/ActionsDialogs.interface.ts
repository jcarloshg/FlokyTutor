
export interface ActionsDialogs<T> {
    launch(params?: T): void,
    close(): void,
}