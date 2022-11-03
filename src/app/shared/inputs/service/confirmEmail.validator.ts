import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from './CustomValidator';
import { ConfiPassValidator } from './confirmPass.validator';

export class ConfiEmailValidator implements CustomValidator {

    public name: string;
    public formControl: FormControl<string | null>;
    public messagesError: Map<string, string>;

    constructor(
        _name: string,
        private formBuilder: FormBuilder,
    ) {
        this.name = _name;
        this.formControl = this.formBuilder.control(
            '',
            [
                Validators.required,
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
            ]
        );
        this.messagesError = new Map()
            .set('required', "Correo electrónico es requerido.")
            .set('pattern', "Correo electrónico no es valido.");
    }

    showMessage(): boolean {
        throw new Error('Method not implemented.');
    }
    getErrorMessage(): string | null {
        throw new Error('Method not implemented.');
    }

}