import { FormControl } from '@angular/forms';

export interface CustomInput {
    formControl: FormControl;
    messagesError: Map<string, string>;
    showMessage(): boolean;
    getErrorMessage(): string | null;
}