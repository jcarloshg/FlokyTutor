import { CustomValidator, ValidatorItem } from "./custom-validator";
import { Validators } from '@angular/forms';

export class EmailCustomValidator extends CustomValidator {

    public validatorsItems: ValidatorItem[] = [
        {
            name: 'required',
            message: "Correo electrónico es requerido.",
            validator: Validators.required,
        },
        {
            name: 'pattern',
            message: "Correo electrónico es requerido.",
            validator: Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        },
    ];

    constructor() {
        super();
    };
}