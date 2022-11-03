import { ValidatorFn, Validators } from "@angular/forms";
import { CustomValidator } from './interfcaes';

export class PasswordValidator implements CustomValidator {

    validators = {
        required: Validators.required,
        pattern: Validators.pattern("^[a-z0-9._%+-]{3,}$"),
    };

    messagesError: Map<string, string> = new Map()
        .set('required', "Contraseña es requerida.")
        .set('pattern', "Contraseña no es valida.");


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