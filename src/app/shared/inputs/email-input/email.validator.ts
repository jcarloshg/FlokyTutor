import { FormControl, ValidationErrors } from "@angular/forms";

interface MessageErro {
    error: string,
    message: string,
}

export class EmailValidator {

    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    private messageErros: MessageErro[] = [
        {
            error: "required",
            message: "Correo electrónico es requerido.",
        },
        {
            error: "pattern",
            message: "Correo electrónico no es valido.",
        },
    ]

    constructor() { }

    public getMessageError(objErrors: object): string | null {

        // example -> ["required","pattern"]
        const typesErrors = Object.keys(objErrors);
        const typeError = typesErrors[0];

        const messageErrorObj: MessageErro | undefined = this.messageErros
            .find(messageErro => messageErro.error === typeError);

        const messageErrorString = (messageErrorObj == undefined)
            ? '[ERROR_NOT_FOUND]'
            : messageErrorObj.message;

        return messageErrorString;
    }

    // validUsername(usernameControl: FormControl): ValidationErrors | null {
    //     return { isValid: true };
    // }

}
