import { CustomValidator, ValidatorItem } from "./custom-validator";
import { Validators } from '@angular/forms';

export class CodeVerificationCustomValidator extends CustomValidator {

    public validatorsItems: ValidatorItem[] = [
        {
            name: 'required',
            message: "El código de verificación es necesario.",
            validator: Validators.required,
        },
        {
            name: 'pattern',
            message: "El código de verificación no es valido",
            validator: Validators.pattern('^[0-9]{6}$'),
        },
    ];

    constructor() {
        super();
    };
}