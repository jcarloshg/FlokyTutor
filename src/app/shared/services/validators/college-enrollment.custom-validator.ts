import { CustomValidator, ValidatorItem } from "./custom-validator";
import { Validators } from '@angular/forms';

export class CollegeEnrollmentCustomValidator extends CustomValidator {

    public validatorsItems: ValidatorItem[] = [
        {
            name: 'required',
            message: "El registro escolar es necesario.",
            validator: Validators.required,
        },
        {
            name: 'pattern',
            message: "El registro escolar no es valido",
            validator: Validators.pattern('^[a-zA-Z0-9]{4,}$'),
        },
    ];

    constructor() {
        super();
    };
}