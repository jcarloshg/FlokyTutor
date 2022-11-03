import { CustomValidator } from './interfcaes';
import { Validators, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class CollegeNameValidator implements CustomValidator {

    validators = {
        required: Validators.required,
        pattern: Validators.pattern('^[a-zA-Z]{2,}( {1,2}[a-zA-Z]{2,}){2,}$'),
    }

    messagesError: Map<string, string> = new Map()
        .set('required', "Nombre es requerido.")
        .set('pattern', "El nombre debe ser valido.")

    constructor() { }

    getValidators(): ValidatorFn[] {
        return Object.values([
            this.validators.required,
            this.validators.pattern,
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