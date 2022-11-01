import { MessageErro, CustomValidator } from "./interfcaes";

export class PasswordValidator implements CustomValidator {

    public passwordPattern: string = "^[a-z0-9._%+-]{3,}$";
    private messageErros: MessageErro[] = [
        {
            error: "required",
            message: "Contraseña es requerido.",
        },
        {
            error: "pattern",
            message: "Contraseña no es valido.",
        },
    ]

    constructor() { }

    pattern: string = "^[a-z0-9._%+-]{3,}$";;
    messagesError: MessageErro[] = [
        {
            error: "required",
            message: "Contraseña es requerido.",
        },
        {
            error: "pattern",
            message: "Contraseña no es valido.",
        },
    ];


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
}