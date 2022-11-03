import { FormControl } from '@angular/forms';

export interface CustomValidator {
    name: string,
    formControl: FormControl;
    messagesError: Map<string, string>;
    showMessage(): boolean;
    getErrorMessage(): string | null;
}