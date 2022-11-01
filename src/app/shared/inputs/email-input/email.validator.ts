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
            message: "El correo electronico es requerido.",
        },
        {
            error: "pattern",
            message: "El correo electronico no es valido.",
        },
    ]

    constructor() { }

    public getMessageError(objErrors: object | undefined | null): string | null {

        if (objErrors === undefined) return null;
        if (objErrors === null) return null;

        // example -> ["required","pattern"]
        const typesErrors = Object.keys(objErrors);
        const typeError = typesErrors[0];

        const messageErrorObj: MessageErro | undefined = this.messageErros
            .find(messageErro => messageErro.error === typeError);

        const messageErrorString = (messageErrorObj == undefined)
            ? null
            : messageErrorObj.message;

        return messageErrorString;
    }

    // validUsername(usernameControl: FormControl): ValidationErrors | null {
    //     return { isValid: true };
    // }

}
