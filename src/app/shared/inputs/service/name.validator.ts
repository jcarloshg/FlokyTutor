import { CustomValidator } from './interfcaes';
import { Validators, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class NameValidator implements CustomValidator {

    validators = {
        required: Validators.required,
        pattern: Validators.pattern('^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){2,}$'),
        short_name: this.validShortName
    }

    messagesError: Map<string, string> = new Map()
        .set('required', "Nombre es requerido.")
        .set('pattern', "Debe ser el nombre con apellidos.")
        .set('short_name', "Nombre no es valido.")

    constructor() { }

    getValidators(): ValidatorFn[] {
        return Object.values([
            this.validators.required,
            this.validators.pattern,
            this.validators.short_name,
        ])
    }

    getMessageError(objErrors: object): string | null {

        // example -> ["required","pattern"]
        const typesErrors = Object.keys(objErrors);
        const typeError = typesErrors[0];

        const messageError = this.messagesError.get(typeError);

        return messageError ?? null;
    }


    private validShortName(shortNameFormControl: FormControl): ValidationErrors | null {
        const shortNameValue: string = shortNameFormControl.value?.trim();
        const regExp = new RegExp('^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){1,}$')
        const isValid = regExp.test(shortNameValue);

        if (isValid == true) return null;

        return {
            short_name: 'is not valid',
        }
    }

}

const plok: NameValidator = new NameValidator();