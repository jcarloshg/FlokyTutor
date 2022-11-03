import { ValidatorFn, Validators } from '@angular/forms';
import { CustomValidator } from './interfcaes';

export class CollageEnrollmenValidator implements CustomValidator {

    validators = {
        required: Validators.required,
        pattern: Validators.pattern('[a-zA-Z]{3,}'),
    };

    messagesError: Map<string, string> = new Map<string, string>()
        .set('required', 'El registro escolar es obligatorio.')
        .set('pattern', 'El registro no es valido.');

    constructor() { }

    getValidators(): ValidatorFn[] {
        return Object.values([
            this.validators.required,
            this.validators.pattern
        ])
    }

    getMessageError(objErrors: object): string | null {
        // example -> ["required","pattern"]
        const typesErrors = Object.keys(objErrors);
        const typeError = typesErrors[0];

        const messageError = this.messagesError.get(typeError);

        return messageError ?? null;
    }
}