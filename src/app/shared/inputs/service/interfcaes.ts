import { ValidatorFn } from "@angular/forms";


interface typeValidator {

    // general
    required?: string | any,
    pattern?: string | any,

    // name
    full_name?: string | any,
    short_name?: string | any,
}

export interface CustomValidator {
    validators: typeValidator,
    messagesError: Map<string, string>,
    getMessageError(objErrors: object): string | null,
    getValidators(): ValidatorFn[]
}