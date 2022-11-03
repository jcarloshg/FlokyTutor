import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

export class ConfiPassValidator implements CustomValidator {

    formControl: FormControl<string | null>;
    messagesError: Map<string, string> = new Map()
        .set('required', "Contraseña es requerida.")
        .set('pattern', "Contraseña no es valida.");

    constructor(
        public name: string,
        private formBuilder: FormBuilder,
    ) {
        this.formControl = this.formBuilder.control(
            '',
            [
                Validators.required,
                Validators.pattern("^[a-z0-9._%+-]{3,}$"),
            ]
        );
    }

    showMessage(): boolean {

        const isTouchedField = this.formControl.touched ? true : false;
        const isValidField = this.formControl.valid ? true : false;

        if (isTouchedField === false) return false;
        if (isValidField === false) return true;

        return true;
    }

    getErrorMessage(): string | null {

        const objErrors = this.formControl.errors;
        if (objErrors == null || objErrors == undefined) return null;

        const typesErrors = Object.keys(objErrors); // example -> ["required","pattern"]
        const typeError = typesErrors[0];

        const messageError = this.messagesError.get(typeError);

        return messageError ?? null;

    }
}