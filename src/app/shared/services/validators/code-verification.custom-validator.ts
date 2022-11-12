import { CustomValidator, ValidatorItem } from "./custom-validator";
import { Validators } from '@angular/forms';

export class CodeVerificationCustomValidator extends CustomValidator {

    public validatorsItems: ValidatorItem[] = [
        {
            name: 'required',
            message: "El código de verificaión es necesario.",
            valiadator: Validators.required,
        },
        {
            name: 'pattern',
            message: "El código de verificaión no es valido",
            valiadator: Validators.pattern('^[0-9]{6}$'),
        },
    ];

    constructor() {
        super();
    };
}