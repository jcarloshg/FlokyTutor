import { CustomValidator } from './interfcaes';
import { ValidatorFn, Validators } from '@angular/forms';

export class EmailValidator implements CustomValidator {

    validators = {
        required: Validators.required,
        pattern: Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    }

    messagesError: Map<string, string> = new Map()
        .set('required', "Correo electrónico es requerido.")
        .set('pattern', "Correo electrónico no es valido.");

    constructor() { }

    getValidators(): ValidatorFn[] {
        return Object.values(this.validators);
    }

    getMessageError(objErrors: object): string | null {

        // example -> ["required","pattern"]
        const typesErrors = Object.keys(objErrors);
        const typeError = typesErrors[0];

        const messageError = this.messagesError.get(typeError);

        return messageError ?? null;
    }
}
